import { tokenAuthRepoJwt } from "../auth";

const authRepo = tokenAuthRepoJwt(JSON.parse(process.env.AUTH_JWK!));

export default authRepo;