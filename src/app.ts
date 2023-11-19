import cors from "cors";
import express, { Request, Response } from "express";
import { StudentRoutes } from "./app/modules/student/studen.route";
const app = express();
// const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// application routes -->
// jkn url `/api/v1/students` ata req pabe tkn StudentRoutes e cole jabe
app.use("/api/v1/students", StudentRoutes);

const getStartRes = (req: Request, res: Response) => {
  res.send("Hello World!");
};
app.get("/", getStartRes);

// console.log(process.cwd());
export default app;
