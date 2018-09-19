const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

// =============================================================

// =======
// ROUTES
// =======

app.get("/", function(req,res){
    res.render("home");
});


app.post("/addfriend", function(req, res){
    res.send("You have reached the post route.")
});

app.get("/friends", function(req,res){
    var friends = ["Tony", "Patricia", "Maddison", "Derrick", "Kenaan"];
    res.render("friends", {friends: friends});
});





// =============================================================

app.listen(PORT, function(){
    console.log("Server has started");
});