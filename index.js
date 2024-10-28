import express from "express";

// dbconfig();

const app = express();

app.get("/", (req, res) => {
  return res.end("<h1>hi there dave here</h1>");
});

app.listen(8000, () => {
  console.log("hi there dave here");
});
