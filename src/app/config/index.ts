import dotenv from "dotenv"; //dotenv
import path from "path"; //node.js buildin mobule

dotenv.config({ path: path.join(process.cwd(), ".env") }); //-->(currentWorkingDirectory+.env)

export default {
  port: process.env.PORT,
  database_url: process.env.mongoDbUrl,
};
