import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";
import { projectToDomain, PROJECT_SELECT } from "../projects";
import { ERR_NOT_MENTEE } from "./apply-project";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await getAuthUser(req, { mentee: { select: { id: true } } });
    if (isLeft(user)) return expressUnwrappErr(res, user);
    if (!user.right.mentee) return expressUnwrappErr(res, left(ERR_NOT_MENTEE));

    const projects = await prisma.project.findMany({
        select: PROJECT_SELECT,
        where: {
            appliedMentees: {
                some: { id: user.right.mentee.id }
            }
        }
    });

    return expressRes(res, right(projects.map(projectToDomain)));
}