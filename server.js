var express = require("express");
var path = require("path");

var app = express();



var PORT = process.env.PORT || 8080;




let friendsArray =

{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  };
  
var newFriend = {
}


//   function totalDifference() {
//       user 1 arr - user 2 arr
      
//   }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});


//default catch-all route that leads to home

app.get("/api/friends", function(req, res) {
  return res.json(friendsArray)
  });


app.post("/api/friends", function(req,res){
  var newFriend = req.body;
  console.log(newFriend);
  //friendsArray.push(newPerson);
  res.json(newFriend);
})


console.log(newFriend);



//post rutes /api/friends




app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});