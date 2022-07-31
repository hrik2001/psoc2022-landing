import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const ProjectApplicantsReq = t.type({
    projectId: ObjectIdT
});

export type ProjectApplicantsReq = t.TypeOf<typeof ProjectApplicantsReq>;