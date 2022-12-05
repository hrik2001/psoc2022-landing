import { left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import { projectToDomain, PROJECT_SELECT } from ".";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { queryValidator } from "../../../lib/middleware/reqValidator";
import { ProjectReq } from "../../../lib/requests/project";

export const ERR_PROJECT_NF = errResp(404, "Project Not Found");

async function handler(_: NextApiRequest, res: NextApiResponse, { projectId }: ProjectReq) {
    const project = await prisma.project.findUnique({
        select: PROJECT_SELECT,
        where: {
            id: projectId
        }
    });

    if (!project) return expressUnwrappErr(res, left(ERR_PROJECT_NF));

    return expressRes(res, right(projectToDomain(project)));
}

export default queryValidator(ProjectReq, handler);