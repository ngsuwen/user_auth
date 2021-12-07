const express=require('express')
const router=express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/user',async (req,res)=>{
  const username =  req.body.username
  const password =  await bcrypt.hash(req.body.password,10);
  await User.create({
    username,
    password,
    role: "BASIC"
  })
  res.redirect('/')
})

module.exports=router;