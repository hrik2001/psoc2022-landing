import { Role, User } from "@prisma/client";
import { isLeft, left, Right, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { CreateProjectReq } from "../../../lib/requests/createProject";

const ERR_NOT_MENTOR = errResp(403, "You are not a mentor");

export async function getMentor(req: NextApiRequest) {
    const user = await getAuthUser(req, { mentor: { select: { id: true } } })
    if (isLeft(user)) return user;
    if (!user.right.mentor) return left(ERR_NOT_MENTOR);

    return user as Right<User & { mentor: { id: string } }>;
}

async function handler(req: NextApiRequest, res: NextApiResponse, createParams: CreateProjectReq) {
    const user = await getMentor(req);
    if (isLeft(user)) return expressUnwrappErr(res, user);

    const project = await prisma.project.create({
        data: {
            name: createParams.name,
            url: createParams.url,
            description: createParams.description,
            logo: createParams.logo,
            mentor: { connect: { id: user.right.mentor.id } }
        },
    });

    return expressRes(res, right({ id: project.id }));
}

export default bodyValidator(CreateProjectReq, handler);