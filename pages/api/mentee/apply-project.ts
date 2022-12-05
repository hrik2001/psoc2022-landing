import { Role } from "@prisma/client";
import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { ApplyProjectReq } from "../../../lib/requests/applyProject";

export const ERR_NOT_MENTEE = errResp(403, "Mentee Access Required");
export const ERR_PROJECT_FINALIZED = errResp(400, "Project is finalized");
export const ERR_PROJECT_NF = errResp(404, "Project Not Found")
export const ERR_ALREADY_APPLIED = errResp(400, "Already Applied");

async function handler(req: NextApiRequest, res: NextApiResponse, { projectId, application }: ApplyProjectReq) {
    const user = await getAuthUser(req, { mentee: { select: { id: true, finalizedProjectId: true } } });
    if (isLeft(user)) return expressUnwrappErr(res, user);
    if (user.right.role != Role.MENTEE) return expressUnwrappErr(res, left(ERR_NOT_MENTEE));
    if (user.right.mentee?.finalizedProjectId) return expressUnwrappErr(res, left(ERR_PROJECT_FINALIZED));

    const project = await prisma.project.findFirst({ where: { id: projectId }, include: { finalizedMentees: { select: { id: true } } } });
    if (!project) return expressUnwrappErr(res, left(ERR_PROJECT_NF)); 
    if (project.appliedMenteeIds.some((v) => v == user.right.mentee!.id) ||
        project.menteeIds.some((v) => v == user.right.mentee!.id) ||
        project.finalizedMentees.some((v) => v.id == user.right.mentee!.id))
        return expressUnwrappErr(res, left(ERR_ALREADY_APPLIED));

    const projInfo = await prisma.project.update({
        where: {
            id: projectId
        },
        data: {
            appliedMentees: {
                connect: { id: user.right.mentee!.id }
            },
            applications: {
                push: {
                    menteeId: user.right.mentee!.id,
                    application
                } 
            }
        }
    });

    return expressRes(res, right("applied"));
}

export default bodyValidator(ApplyProjectReq, handler);