import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const ApplyProjectReq = t.type({
    projectId: ObjectIdT
});

export type ApplyProjectReq = t.TypeOf<typeof ApplyProjectReq>;