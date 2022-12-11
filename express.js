const express = require("express");
const path = require('path');

const app = express();
const port = 8080;

app.get("/", (_, res) => {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.use(express.static(path.join(__dirname, "dist/public")));
app.use(express.static(path.join(__dirname, "dist")));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
