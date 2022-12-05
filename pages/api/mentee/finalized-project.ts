import { isLeft, left, right } from "fp-ts/lib/Either";
import { NextApiRequest, NextApiResponse } from "next";
import { errResp, expressRes, expressUnwrappErr } from "../../../lib/helpers/apiResp";
import { getAuthUser } from "../../../lib/helpers/auth";
import { projectToDomain, PROJECT_SELECT } from "../projects";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const user = await getAuthUser(req, {
        mentee: {
            include: {
                finalizedProject: {
                    select: PROJECT_SELECT
                }
            }
        }
    });

    if (isLeft(user)) return expressUnwrappErr(res, user);
    if (!user.right.mentee?.finalizedProject) return expressUnwrappErr(res, left(errResp(400, "No finalized project")));

    return expressRes(res, right(projectToDomain(
            user.right.mentee.finalizedProject
        ))
    );
}