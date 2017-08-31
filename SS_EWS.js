const express = require("express"),
      app = express(),
      engines = require("consolidate");

app.engine("html", engines.nunjucks);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

app.get("/", function(req, res){
  res.render("index");
});

app.use(function(req, res){
  res.sendStatus(400);
});

const server = app.listen(3000, function(){
  let port = server.address().port;
  console.log("LISTENING ON PORT %s", port);
});
