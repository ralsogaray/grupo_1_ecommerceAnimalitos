function guestMiddleware(req,res,next){
    if(req.session.userLogged){
        return res.redirect('/profile')
    }
    return next()
}
module.exports = guestMiddleware