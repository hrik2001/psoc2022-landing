import { fromEither, none, Option, some } from "fp-ts/lib/Option";
import * as jose from "jose";
import * as t from "io-ts";
import { pipe } from "fp-ts/lib/function";

// 7 days token expiry
const TOKEN_EXPIRY = "7d";

const AuthJwtPayload = t.type({
    userId: t.string,
    nonce: t.number
});

export type AuthJwtPayload = t.TypeOf<typeof AuthJwtPayload>;

export function tokenAuthRepoJwt(privKeyJson: Record<any, any>) {
    let _privKey: jose.KeyLike | Uint8Array | undefined;
    async function privKey() {
        if (!_privKey)
            _privKey = await jose.importJWK(privKeyJson, "ES256");

        return _privKey;
    }

    return {
        async verify(token: string): Promise<Option<AuthJwtPayload>> {
            try {
                const { payload } = await jose.jwtVerify(token, await privKey());
                return pipe(
                    AuthJwtPayload.decode(payload),
                    fromEither
                );
            } catch {}
            return none;
        },
        async generateToken(payload: AuthJwtPayload) {
            return new jose.SignJWT(payload)
                .setProtectedHeader({ alg: "ES256" })
                .setIssuedAt()
                .setExpirationTime(TOKEN_EXPIRY)
                .sign(await privKey())
        }
    }
}
