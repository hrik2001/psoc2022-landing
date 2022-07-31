import { Role } from "@prisma/client";
import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { FinalizeProjectReq } from "../../../lib/requests/finalizeProject";
import { ERR_NOT_MENTEE } from "./apply-project";

const ERR_CANT_FINALIZE = errResp(400, "Can't Finalize this project");

async function handler(req: NextApiRequest, res: NextApiResponse, { projectId }: FinalizeProjectReq) {
    const user = await getAuthUser(req, { mentee: { select: { id: true } } });
    if (isLeft(user)) return expressUnwrappErr(res, user);
    if (user.right.role != Role.MENTEE) return expressUnwrappErr(res, left(ERR_NOT_MENTEE));

    const proj = await prisma.project.count({
        where: {
            id: projectId,
            menteeIds: {
                has: user.right.mentee!.id
            }
        }
    });

    if (proj != 1) return expressUnwrappErr(res, left(ERR_CANT_FINALIZE));

    await prisma.project.update({
        where: {
            id: projectId
        },
        data: {
            selectedMentees: {
                disconnect: { id: user.right.mentee!.id }
            },
            finalizedMentees: {
                connect: { id: user.right.mentee!.id }
            }
        }
    });

    return expressRes(res, right("finalized"));
}

export default bodyValidator(FinalizeProjectReq, handler);