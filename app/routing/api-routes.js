

var friends = require("../data/friends.js");


module.exports = function (app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

}

app.post("/api/friends", function(req,res){
var bestMatch = {
  name: "",
  photo: "",
  friendDifference: 1000
}

console.log(req.body)

var userData = req.body
var userScores = userData.scores

console.log(userScores)

var totalDifference = 0 

for(var i =0; i < friends.length; i++) {
  console.log(friends[i]);
  totalDifference = 0;

  for (var j = 0; j < friends[i].scores[j]; j++) {
    totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

    if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
    }


  }
}

friends.push(userData)

res.json(bestMatch)

});


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  pp.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });