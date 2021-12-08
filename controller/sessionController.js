const express=require('express')
const router=express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/',async (req,res)=>{
  const user = await User.findOne({username: req.body.username});
  if (!user){
    res.send('Invalid User')
  } else {
      const isValid = await bcrypt.compare(req.body.password,user.password);
      if(isValid){
        req.session.user=user 
        res.redirect('/')
      }else {
        res.send('Invalid Password')
      }
  }
})

router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports=router;