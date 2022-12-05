import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const AcceptMenteeReq = t.type({
    projectId: ObjectIdT,
    menteeId: ObjectIdT
});

export type AcceptMenteeReq = t.TypeOf<typeof AcceptMenteeReq>;