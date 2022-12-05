import { flatten, isLeft, left, map, right } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { isNone } from "fp-ts/lib/Option";
import { NextApiRequest } from "next";
import authRepo from "../deps/auth";
import logger from "../deps/logger";
import prisma from "../deps/prisma";
import { errResp } from "./apiResp";

const ERR_AUTH_HEADER_MISSING = errResp(401, "Authorization header is missing");
const ERR_INVALID_TOKEN = errResp(401, "Invalid Token");
const ERR_USER_NF = errResp(500, "User Not Found");

type IncludeParams = Parameters<typeof prisma.user.findUnique>[0]["include"] | undefined;
type UndefIfUnk<T> = unknown extends T ? undefined : T

const getAuthUserInner = async <T extends IncludeParams>(req: NextApiRequest, include: T) => {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith("Bearer ")) return left(ERR_AUTH_HEADER_MISSING);

    const token = bearer.split(" ")[1];
    const payload = await authRepo.verify(token);
    if (isNone(payload)) return left(ERR_INVALID_TOKEN);

    const user = await prisma.user.findUnique({ where: { id: payload.value.userId }, include });
    if (!user) {
        if (!include) logger.log("critical", "possible private key leak! recv invalid token", token);

        return left(ERR_USER_NF);
    }

    if (user.nonce != payload.value.nonce) return left(ERR_INVALID_TOKEN);

    return right(user);
}

export const getAuthUser = <T extends IncludeParams>(req: NextApiRequest, include?: T) => getAuthUserInner(req, include as UndefIfUnk<T>);