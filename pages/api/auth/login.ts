import { left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import authRepo from "../../../lib/deps/auth";
import prisma from "../../../lib/deps/prisma";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { scryptVerify } from "../../../lib/helpers/scrypt";
import { LoginReq } from "../../../lib/requests/login";

const ERR_INVALID_CRED = errResp(401, "Invalid Credentials");

async function handler(_: NextApiRequest, res: NextApiResponse, loginR: LoginReq) {
    const user = await prisma.user.findUnique({
        select: {
            id: true,
            password: true,
            nonce: true
        },
        where: {
            email: loginR.email
        }
    });
    if (!user) return expressUnwrappErr(res, left(ERR_INVALID_CRED));
    if (!await scryptVerify(loginR.password, user.password)) return expressUnwrappErr(res, left(ERR_INVALID_CRED));

    const token = await authRepo.generateToken({ userId: user.id, nonce: user.nonce });
    return expressRes(res, right({ token }));
}