import { isLeft, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import { projectToDomain, PROJECT_SELECT } from ".";
import prisma from "../../../lib/deps/prisma";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getMentor } from "../mentor/create-project";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await getMentor(req);
    if (isLeft(user)) return expressUnwrappErr(res, user);

    const projects = await prisma.project.findMany({
        select: PROJECT_SELECT,
        where: {
            mentorId: user.right.mentor.id
        }
    });

    return expressRes(res, right(projects.map(projectToDomain)))
}