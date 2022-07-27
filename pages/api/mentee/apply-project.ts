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
export const ERR_ALREADY_APPLIED = errResp(400, "Already Applied");

async function handler(req: NextApiRequest, res: NextApiResponse, { projectId }: ApplyProjectReq) {
    const user = await getAuthUser(req, { mentee: { select: { id: true, finalizedProjectId: true } } });
    if (isLeft(user)) return expressUnwrappErr(res, user);
    if (user.right.role != Role.MENTEE) return expressUnwrappErr(res, left(ERR_NOT_MENTEE));
    if (user.right.mentee?.finalizedProjectId) return expressUnwrappErr(res, left(ERR_PROJECT_FINALIZED));

    const menteeInfo = await prisma.mentee.updateMany({
        where: {
            userId: user.right.id,
            availableProjects: {
                none: {
                    id: projectId
                }
            },
            appliedProjects: {
                none: {
                    id: projectId
                }
            }
        },
        data: {
            appliedProjectIds:{
                push: projectId
            }
        }
    });

    if (menteeInfo.count == 0) return expressUnwrappErr(res, left(ERR_ALREADY_APPLIED));

    return expressRes(res, right("applied"));
}

export default bodyValidator(ApplyProjectReq, handler);