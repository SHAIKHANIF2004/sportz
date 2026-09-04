import express from "express";
import { matchRouter } from "./routes/matches.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.send(`<h1>Sportz API Server</h1>`);
});

app.use("/api/matches", matchRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});