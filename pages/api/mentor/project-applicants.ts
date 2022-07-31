import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { ProjectApplicantsReq } from "../../../lib/requests/projectApplicantsReq";
import { ERR_PROJECT_NF } from "../mentee/apply-project";
import { getMentor } from "./create-project";

type ApplicantsRes = {
    name: string,
    menteeId: string,
    application: string
}[];

async function handler(req: NextApiRequest, res: NextApiResponse, prReq: ProjectApplicantsReq) {
    const mentor = await getMentor(req);
    if (isLeft(mentor)) return expressUnwrappErr(res, mentor);

    const proj = await prisma.project.findFirst({
        where: {
            id: prReq.projectId,
            mentorId: mentor.right.mentor.id
        },
        select: {
            applications: true,
            appliedMentees: {
                select: {
                    id: true,
                    user: {
                        select: {
                            name: true
                        }
                    },
                }
            }
        }
    });

    if (!proj) return expressUnwrappErr(res, left(ERR_PROJECT_NF))

    const names: { [menteeId: string]: string } = {};

    for (const mentee of proj.appliedMentees) {
        names[mentee.id] = mentee.user.name;
    }

    const ret: ApplicantsRes = proj.applications.map((a, i) => ({
        name: names[a.menteeId],
        menteeId: a.menteeId,
        application: a.application
    }));

    return expressRes(res, right(ret));
}

export default bodyValidator(ProjectApplicantsReq, handler);