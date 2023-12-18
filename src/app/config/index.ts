import dotenv from "dotenv"; //dotenv
import path from "path"; //node.js buildin mobule

dotenv.config({ path: path.join(process.cwd(), ".env") }); //-->(currentWorkingDirectory+.env)

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.mongoDbUrl,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_pass: process.env.DEFAULT_PASS,
};
