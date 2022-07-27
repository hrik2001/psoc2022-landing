import * as t from "io-ts";
import { ObjectIdT } from "../helpers/objectIdT";

export const NextProjectPageReq = t.type({
    objectId: ObjectIdT
});

export type NextProjectPageReq = t.TypeOf<typeof NextProjectPageReq>;