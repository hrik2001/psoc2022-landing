import * as t from "io-ts";

export const CreateProjectReq = t.type({
    name: t.string,
    url: t.string,
    description: t.string,
    logo: t.string
});

export type CreateProjectReq = t.TypeOf<typeof CreateProjectReq>;