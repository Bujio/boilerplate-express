let express = require("express");
const dotenv = require("dotenv").config();
console.log("Hello World");
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
if (process.env.MESSAGE_STYLE == "uppercase") {
  app.get("/json", (req, res) => res.json({ message: "HELLO JSON" }));
} else {
  app.get("/json", (req, res) => res.json({ message: "Hello json" }));
}

module.exports = app;
