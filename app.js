const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Patricia", "Maddison", "Derrick", "Kenaan"];

// =============================================================

// =======
// ROUTES
// =======

app.get("/", function(req,res){
    res.render("home");
});


app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends")
});

app.get("/friends", function(req,res){
    res.render("friends", {friends: friends});
});





// =============================================================

app.listen(PORT, function(){
    console.log("Server has started");
});