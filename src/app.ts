import express from "express";
import { healthRouter, uploadRouter } from "./modules";


const app = express();

app.use(express.json());

app.use("/api/v1", healthRouter);
app.use("/api/v1", uploadRouter);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
export { app };
