

function  userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false

    if(req.session && req.session.userLogged){
        res.locals.isLogged = true
        res.locals.user = req.session.userLogged.user_name
        res.locals.userIsAdmin = req.session.userLogged.user_type === "admin"
    }

    return next()

}
module.exports = userLoggedMiddleware