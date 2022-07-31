import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const FinalizeProjectReq = t.type({
    projectId: ObjectIdT,
});

export type FinalizeProjectReq = t.TypeOf<typeof FinalizeProjectReq>;