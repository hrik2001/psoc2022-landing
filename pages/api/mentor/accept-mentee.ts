import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { AcceptMenteeReq } from "../../../lib/requests/acceptMentee";
import { getMentor } from "./create-project";

const ERR_MENTEE_ACCEPTED = errResp(400, "Mentee already accepted");

async function handler(req: NextApiRequest, res: NextApiResponse, acc: AcceptMenteeReq) {
    const mentor = await getMentor(req);
    if (isLeft(mentor)) return expressUnwrappErr(res, mentor);

    const proj = await prisma.project.count({
        where: {
            id: acc.projectId,
            OR: {
                menteeIds: {
                    has: acc.menteeId
                },
                finalizedMentees: {
                    some: { id: acc.menteeId }
                }
            }
        }
    });
    if (proj != 0) return expressUnwrappErr(res, left(ERR_MENTEE_ACCEPTED));

    await prisma.project.update({
        where: {
            id: acc.projectId,
        },
        data: {
            appliedMentees: {
                disconnect: { id: acc.menteeId },
            },
            selectedMentees: {
                connect: { id: acc.menteeId },
            },
            applications: {
                deleteMany: {
                    where: {
                        menteeId: acc.menteeId
                    }
                }
            }
        }
    });

    return expressRes(res, right("accepted"));
}

export default bodyValidator(AcceptMenteeReq, handler);