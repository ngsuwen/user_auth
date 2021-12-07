const User = require('./models/user')
const bcrypt= require('bcrypt')


const upsertAdmin=async()=>{
  const username='admin'
  const password=await bcrypt.hash('admin',10)
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