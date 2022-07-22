import { Project } from "@prisma/client";
import { isLeft, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";

export const PAGE_SIZE = 50; 

export const PROJECT_SELECT =  {
    id: true,
    name: true,
    url: true,
    description: true,
    // HADOKEN
    mentor: {
        include: {
            user: {
                select: {
                    name: true
                }
            }
        }
    } 
};

type ProjectRes = {
    id: string;
    name: string;
    url: string;
    description: string;
    mentorName: string;
}

export function projectToDomain(model: { id: string, name: string, url: string, description: string, mentor: { user: { name: string }} }): ProjectRes {
    return {
        id: model.id,
        name: model.name,
        url: model.url,
        description: model.description,
        mentorName: model.mentor.user.name
    }
}

export const getProjects = async (req: NextApiRequest, res: NextApiResponse, cursor?: string) => {
    const user = await getAuthUser(req);
    if (isLeft(user)) return expressUnwrappErr(res, user);

    const query = {
        take: PAGE_SIZE,
        skip: cursor ? 1 : 0,
        select: PROJECT_SELECT, 
        where: {
            NOT: {
                appliedMenteeIds: {
                        has: user.right.id
                }
            }
        },
        cursor: {
            id: cursor
        }
    }

    const projects = await prisma.project.findMany(query);

    return expressRes(res, right(projects.map(projectToDomain)));
}

export default getProjects;