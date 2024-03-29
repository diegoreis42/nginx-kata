const express = require("express");
const app = express();
const port = 3000;
let counter = 0;

const server = app.listen(port, () => {
  console.log("Server listening at: " + port);
});

app.get("/", (req, res) => {
  if (counter >= 5) {
    server.close();
  } else {
    res.status(200).send("Counter from " + req.hostname + " : " + ++counter);
  }
});
