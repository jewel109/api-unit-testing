const mongoose  = require("mongoose")

const UserSchema = mongoose.Schema({
  username:{
    type:String,
    reqired:true,
    unique:true
  }
})

module.exports = mongoose.model("User",UserSchema)

