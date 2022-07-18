var express = require('express');
var app = express();
// for parsing the body in POST request
var bodyParser = require('body-parser');
var fs = require('fs');
var users =[{
    id: 1,
    name: "John Doe",
    age : 23,
    email: "john@doe.com"
}];
const output_user=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET /api/users
app.get('/api/users', function(req, res){
    return res.json(output_user);    
});


/* POST /api/users
    {
        "user": {
           "id": 3,
            "name": "Test User",
            "age" : 20,
            "email": "test@test.com"
        }
    }
*/
app.post('/api/users', function (req, res) {
    var user = req.body;
    console.log(user);
    output_user.push(user);
    const myJSON = JSON.stringify(output_user);
fs.open('mynewfile3.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
fs.appendFile('mynewfile3.txt', myJSON, function (err) {
  if (err) throw err;
  console.log(myJSON);
});
    return res.send('User has been added successfully');
});



app.listen('3000', function(){
    console.log('Server listening on port 3000');
});