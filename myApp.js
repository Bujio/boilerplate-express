let express = require("express");
const dotenv = require("dotenv").config();
console.log("Hello World");
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
const mySecret = process.env["MESSAGE_STYLE"];

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "Hello json".toUpperCase(),
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});
module.exports = app;
