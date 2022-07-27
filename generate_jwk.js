// Quick Script to generate ES256 JWK Keypair
const jose = require("jose");
const readline = require("readline");


async function main() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const generate = await new Promise(res => read.question("generate new private key?(y/n): ", res));
    if (generate.trim().toLowerCase() == "y") {
        console.log("generating new ES256 key pair...");

        const kp = await jose.generateKeyPair("ES256");
        privk = kp.privateKey;
        console.log(`JWK private key(used for sigining):\n${JSON.stringify(await jose.exportJWK(kp.privateKey))}`);
    } else {
        console.log("bye")
    }
}

main().then(() => process.exit(0));