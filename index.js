const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = "3000";

app.post("/api/fileanalyse", multer().single("upfile"), (req, res) => {
  let response = {};
  console.log(req.file);
  response.name = req.file.originalname;
  response.type = req.file.mimetype;
  response.size = req.file.size;
  res.json(response);
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
