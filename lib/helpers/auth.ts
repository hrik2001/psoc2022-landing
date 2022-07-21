import { left, right } from "fp-ts/lib/Either";
import { isNone } from "fp-ts/lib/Option";
import { NextApiRequest } from "next";
import authRepo from "../deps/auth";
import logger from "../deps/logger";
import prisma from "../deps/prisma";
import { errResp } from "./apiResp";

const ERR_AUTH_HEADER_MISSING = errResp(401, "Authorization header is missing");
const ERR_INVALID_TOKEN = errResp(401, "Invalid Token");
const ERR_USER_NF = errResp(500, "User Not Found");

export const getAuthUser = async (req: NextApiRequest) => {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith("Bearer ")) return left(ERR_AUTH_HEADER_MISSING);

    const token = bearer.split(" ")[1];
    const payload = await authRepo.verify(token);
    if (isNone(payload)) return left(ERR_INVALID_TOKEN);

    const user = await prisma.user.findUnique({ where: { id: payload.value.userId } });
    if (!user) {
        logger.crit("possible private key leak! recv invalid token", token);
        return left(ERR_USER_NF);
    }

    return right(user);
}