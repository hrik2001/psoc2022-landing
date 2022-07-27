import * as t from "io-ts";

export const RegisterReq = t.type({
    name: t.string,
    email: t.string,
    password: t.string,
    role: t.union([t.literal("mentor"), t.literal("mentee")])
});

export type RegisterReq = t.TypeOf<typeof RegisterReq>;