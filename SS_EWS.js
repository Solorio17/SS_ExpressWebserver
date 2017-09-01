const express = require("express"),
      app = express(),
      path = require("path"),
      bodyParser = require("body-parser");

//USING A STATIC PATH
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post("/subscribe", (req, res) => {
 let name = req.body.name;
 let email = req.body.email;

 console.log(name + "has just subscribed with " + email);

 res.redirect("index.html");
})


const server = app.listen(3000,() => {
  let port = server.address().port;
  console.log("Listening On Port... %s", port);
});


//USING EXPRESS FOR ROUTING AND DISPLAYING
// engines = require("consolidate"),
// app.engine("html", engines.nunjucks);
// app.set("view engine", "html");
// app.set("views", __dirname + "/views");
// app.get("/", (req, res) => {
// res.render("index");
// });
//
// app.get("/:name", (req, res) => {
// let users = req.params.name;
// res.render("name", {users: users});
// });
//
// app.use((req, res) => {
//   res.sendStatus(400);
// });
