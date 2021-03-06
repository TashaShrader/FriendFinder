var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let friendsArray =
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores": [
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
  ],
};

var newFriend = {
"name": "Tasha",
"photo": "htpps://google.com",
"scores": [
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5
]



}


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function (req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});


app.get("/api/friends", function(req,res) {
 
res.json(friendsArray)
});

app.post("/api/friends", function (req, res) {
  var newUser = req.body;
    res.json(newUser);

})



console.log(newFriend);





app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});