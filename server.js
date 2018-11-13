var express = require("express");
//console.log(express);
var app = express();

// require body-parser
var bodyParser = require("body-parser");
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public/dist/public"));

// This sets the location where express will look for the ejs views
app.set("views", __dirname + "/views");
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set("view engine", "ejs");

// app.get("/", function(request, response) {
//   // console.log("this is request:", request);
//   // console.log("this is response:", response);

//   response.render("./views/index");
// });

app.get("/users", function(request, response) {
  // hard coded user daat
  var users_array = [
    { name: "Michael", email: "michael@codingdojo.com" },
    { name: "Jay", email: "jay@codingdojo.com" },
    { name: "Brendan", email: "brendan@codingdojo.com" },
    { name: "Andrew", email: "andrew@codingdojo.com" }
  ];
  response.render("users", { users: users_array });
});

app.get("/tasks", function(request, response) {
  // hard coded user daat
  var users_array = [
    { name: "Michael", email: "michael@codingdojo.com" },
    { name: "Jay", email: "jay@codingdojo.com" },
    { name: "Brendan", email: "brendan@codingdojo.com" },
    { name: "Andrew", email: "andrew@codingdojo.com" }
  ];
  response.redirect("/");
});

// route to process new user form data:
app.post("/users", function(req, res) {
  console.log("POST DATA \n\n", req.body);
  //code to add user to db goes here!
  // redirect the user back to the root route.
  res.redirect("/");
});

app.listen(8000, function() {
  console.log("listening on 8000");
});
