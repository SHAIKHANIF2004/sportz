import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (_, res) => {
  res.send(`<h1>Sportz API Server</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});