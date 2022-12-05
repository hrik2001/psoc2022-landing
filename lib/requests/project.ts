import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const ProjectReq = t.type({
    projectId: ObjectIdT
});

export type ProjectReq = t.TypeOf<typeof ProjectReq>;