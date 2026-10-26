// require("dotenv").config();
// const express = require("express");
// const app = express();
// const port = 4000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/profile", (req, res) => {
//   res.send("Profile");
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const data = require("./data.json");
  let userData = data.find((user) => user.username === username);

  res.render("insta.ejs", { userData });
});

app.get("/dice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { num: diceVal });
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
