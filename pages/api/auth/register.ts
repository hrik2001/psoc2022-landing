// WARN: THIS ENDPOINT SHOULDN'T BE PRESENT IN PRODUCTION

import { Role } from "@prisma/client";
import { right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/deps/prisma";
import { expressRes } from "../../../lib/helpers/apiResp";
import { scryptHash } from "../../../lib/helpers/scrypt";
import { bodyValidator } from "../../../lib/middleware/reqValidator";
import { RegisterReq } from "../../../lib/requests/register";

async function handler(_: NextApiRequest, res: NextApiResponse, user: RegisterReq) {
    const pwHash = await scryptHash(user.password);
    let mentee;
    let mentor;
    let role;
    if (user.role == "mentee") {
        mentee = { create: {} };
        role = Role.MENTEE;
    } else {
        mentor = { create: {} };
        role = Role.MENTOR;
    }
    await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: pwHash,
            nonce: 0,
            role,
            mentee,
            mentor
        }
    });

    return expressRes(res, right("created"))
}

export default bodyValidator(RegisterReq, handler);