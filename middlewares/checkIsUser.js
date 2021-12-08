const checkIsUser=(req,res,next)=>{

    if(!req.session.user){
      res.redirect('/login')
      return
    }
    if(req.session.user.role!=='BASIC'){
      res.send('Unauthorized')
      return
    }
    next();
  }
  
  module.exports=checkIsUser