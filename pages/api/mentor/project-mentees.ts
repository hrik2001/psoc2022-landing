import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { ProjectApplicantsReq } from "../../../lib/requests/projectApplicantsReq";
import { ERR_PROJECT_NF } from "../mentee/apply-project";
import { getMentor } from "./create-project";

type MenteeInfo = {
    name: string
}

type MenteeRes = {
    selectedMentees: MenteeInfo[],
    finalizedMentees: MenteeInfo[]
}

async function handler(req: NextApiRequest, res: NextApiResponse, prReq: ProjectApplicantsReq) {
    const mentor = await getMentor(req);
    if (isLeft(mentor)) return expressUnwrappErr(res, mentor);

    const proj = await prisma.project.findFirst({
        where: {
            id: prReq.projectId,
            mentorId: mentor.right.mentor.id
        },
        select: {
            selectedMentees: {
                select: {
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            },
            finalizedMentees: {
                select: {
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });

    if (!proj) return expressUnwrappErr(res, left(ERR_PROJECT_NF));

    const ret: MenteeRes = {
        selectedMentees: proj.selectedMentees.map(m => ({
            name: m.user.name
        })),
        finalizedMentees: proj.finalizedMentees.map(m => ({
            name: m.user.name
        }))
    };

    return expressRes(res, right(ret));
}

export default bodyValidator(ProjectApplicantsReq, handler);