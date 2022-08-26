const express = require("express");
const app = express();
var bodyParser = require('body-parser');

const port = 3001;


var users =[{
  id: 1,
  name: "John Doe",
  age : 23,
  email: "john@doe.com"
}];

app.get("/", (req, res) => {
  res.status(200).send("api working!!!");
});

app.get("/users", (req, res)=>{
return  res.json(users)
})

app.post("/users", (req, res)=>{
 res.send("posted")
  console.log(res.body)
  })


app.listen(port, () => console.log(`running on port ${port}`));
