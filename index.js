const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
// const multer = require("multer");
const upload = require("./middleware/fileupload");

const dbConnection = require("./config/dbconfig");
// mongoose
//   .connect("mongodb://127.0.0.1:3030/")
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });
const Userroute = require("./Routes/user");
const Adminroute = require("./Routes/admin");
const Authorroute = require("./Routes/author");
const BookRoute = require("./Routes/book");

dbConnection.dbConnection();





// app.use(multer);
app.use(bodyparser.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/user", Userroute);
app.use("/admin", Adminroute);
app.use("/author", Authorroute);
app.use("/book", BookRoute);

app.post("/upload", upload, (req, res) => {
  res.send("file uploaded succssfully ");
});

app
  .get("/", (req, res) => {
    res.send("Hi Server is Runing  on 3030 ");
  })
  .listen(+process.env.PORT, () => {
    console.log("server is runing yes");
  });
