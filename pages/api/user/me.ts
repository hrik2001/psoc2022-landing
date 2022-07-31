import { isLeft, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import { expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await getAuthUser(req);
    if (isLeft(user)) return expressUnwrappErr(res, user);

    return expressRes(res, right({
        name: user.right.name,
        email: user.right.email,
        role: user.right.role
    }));
}