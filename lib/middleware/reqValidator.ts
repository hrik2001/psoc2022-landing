import { match, left } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { Decoder } from "io-ts";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { errResp, expressUnwrappErr } from "../helpers/apiResp";


function pValidator<T, V, R, Ret>(decoder: Decoder<T, V>, prop: keyof NextApiRequest, handler: (req: NextApiRequest, res: NextApiResponse<R>, requestedProp: V,) => Ret): NextApiHandler {
    return (req, res) => pipe(
        decoder.decode(req[prop]),
        match(
            (e) => { expressUnwrappErr(res, left(errResp(400, "Malformed Request"))); },
            (d) => { handler(req, res, d); }
        )
    ); 
}

export function bodyValidator<T, V, R, Ret>(decoder: Decoder<T, V>, handler: (req: NextApiRequest, res: NextApiResponse<R>, requestedProp: V,) => Ret): NextApiHandler {
    return pValidator(decoder, "body", handler);
}

export function queryValidator<T, V, R, Ret>(decoder: Decoder<T, V>, handler: (req: NextApiRequest, res: NextApiResponse<R>, requestedProp: V,) => Ret): NextApiHandler {
    return pValidator(decoder, "query", handler);
}