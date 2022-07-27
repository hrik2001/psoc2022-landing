import { pipe } from "fp-ts/lib/function"
import { flatten, map, right } from "fp-ts/lib/Either"
import * as t from "io-ts"

export const ObjectIdT = new t.Type<string, string, unknown>(
    'ObjectId',
    t.string.is,
    (i, ctx) => pipe(
        t.string.validate(i, ctx),
        map((v) => v.match(/^[0-9a-fA-F]{24}$/) ? right(v) : t.failure<string>(v, ctx, "string is not an objectid")),
        flatten
    ),
    t.identity
);