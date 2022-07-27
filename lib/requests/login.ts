import * as t from "io-ts";

export const LoginReq = t.type({
    email: t.string,
    password: t.string
});

export type LoginReq = t.TypeOf<typeof LoginReq>;