const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log("Server listening at: " + port);
});

app.get("/", (req, res) => {
  res.set("Cache-Control", "public, max-age=3600");
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
