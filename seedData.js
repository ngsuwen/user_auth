const User = require('./models/user')
const bcrypt= require('bcrypt')
require('dotenv').config();

const upsertAdmin=async()=>{
  const username=process.env.ADMIN_USER
  const password=await bcrypt.hash(process.env.ADMIN_PASSWORD,10)
  await User.findOneAndUpdate(
    {
      username
    },
    {
     username,
     password,
     role: 'ADMIN' 
     },{
     upsert: true
   }
   )
}

module.exports=upsertAdmin