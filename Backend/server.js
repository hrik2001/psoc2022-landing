const express = require('express')
const app = express()
const User=require('./models/user')
const mongoose =require('mongoose')
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(
  express.urlencoded({ extended: true })
);
mongoose.connect("mongodb://localhost/psocData")
const db = mongoose.connection
db.on("error",error=>console.error(error))
db.once("open",()=>console.log("connecred to database"))
app.use(express.json())
app.get("/", (req, res) => {
    res.send("ayeeo nigga");
})
app.post("/form",async(req,res) =>{
  const user=new User({
    name: req.body.name,
    Github_profile: req.body.Github_profile,
    email: req.body.email,
    Phone_no: req.body.Phone_no
  
  });
  try{
     const user1=await user.save();
     res.status(201).json({ user1 });
  }catch(err){
      console.log(err)
  }

})
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });