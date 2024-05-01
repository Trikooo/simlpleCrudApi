const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/product.router.js")

app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(router)


app.get("/", (req, res) => {
  res.send("hello world and all that good stuff");
});


mongoose
  .connect(
    "mongodb+srv://trikooplays:SXsKgtrkT5OkV1FK@cluster0.qko5uun.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("connection failed.");
  });

app.listen(3000, () => {
  console.log("app running on port 3000");
});
