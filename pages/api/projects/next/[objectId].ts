import { NextApiRequest, NextApiResponse } from "next";
import getProjects from "..";
import { queryValidator } from "../../../../lib/middleware/reqValidator";
import { NextProjectPageReq } from "../../../../lib/requests/nextProjectPage";

const handler = (req: NextApiRequest, res: NextApiResponse, { objectId }: NextProjectPageReq) => getProjects(req, res, objectId);

export default queryValidator(NextProjectPageReq, handler)