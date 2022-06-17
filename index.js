const express = require("express")
const mongoose = require('mongoose')
const User = require('./model/user')
const db = require('./db.js')
const app = express()

app.use(express.json())

// creating a user
app.post('/user',async (req,res) => {
  const {username} = req.body
  
  const newUser = await User.create({
    username
  })  

  if (!username){
    res.status(401).json({
      success:"no",
      message:"No User Found"
    })
  }
  res.status(200).json({
    success:"ok",
    username:newUser
  })
})

// Get all User
app.get('/user', async (req,res) => {
   const allUser = await User.find({})
  res.status(200).json({
    success:"ok",
    allUser
  })
})

// Get user by name 
app.get('/user/:name',(req,res) =>{
  const name = req.params.name
  
  const username = User.findOne({username:name},err => console.log(err))
  console.log(username)
  if(!username) res.status(400)
  res.status(200).json({
    success:"ok",
    username
  })
  
})
module.exports = app
