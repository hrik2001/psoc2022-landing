import crypto from "crypto";

export function scryptVerify(password: string, hash: string): Promise<boolean> {
    return new Promise((resolve) => {
        const [salt, key] = hash.split(":");
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) resolve(false);
            resolve(crypto.timingSafeEqual(Buffer.from(key, "hex"), derivedKey));
        });
    });
}

export function scryptHash(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString("hex");
    return new Promise((res, rej) => crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) rej(err);
        res(`${salt}:${derivedKey.toString("hex")}`);
    }))
}