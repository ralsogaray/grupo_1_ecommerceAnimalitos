function authMiddleware(req,res,next){
    if(req.session.userLogged == undefined){
        return res.redirect('/login')
    }
   return  next()
}
module.exports = authMiddleware