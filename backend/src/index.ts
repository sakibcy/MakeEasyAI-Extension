import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getLanguages } from "./extAPI";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/languages", async (req: Request, res: Response) => {
  const lang = await getLanguages();
  res.send(lang)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});