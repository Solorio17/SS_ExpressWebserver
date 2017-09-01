const express = require("express"),
      app = express(),
      engines = require("consolidate");

app.engine("html", engines.nunjucks);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
res.render("index");
});

app.get("/:name", (req, res) => {
let users = req.params.name;
res.render("name", {users: users});
});

app.use((req, res) => {
  res.sendStatus(400);
});

const server = app.listen(3000,() => {
  let port = server.address().port;
  console.log("Listening On Port... %s", port);
});
