const checkIsAdmin=(req,res,next)=>{

    if(!req.session.user){
      res.redirect('/login')
      return
    }
    if(req.session.user.role!=='ADMIN'){
      res.send('Unauthorized')
      return
    }
    next();
  }
  
  module.exports=checkIsAdmin