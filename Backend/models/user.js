const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    Github_profile:String,
    email:String,
    Phone_no:Number
        
   

})

module.exports =mongoose.model("User",userSchema)