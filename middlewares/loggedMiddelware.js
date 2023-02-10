

function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false
    console.log("chau middel")
    
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true
        res.locals.user = req.session.userLogged.user_name
        
    }

    return next()
 /*
    const emailInCookie = req.cookies.userEmail
    const userFromCookie = users.find(user => user.email == emailInCookie)

    if(userFromCookie){
        req.session.userLogged=userFromCookie
    }

    if(req.session.userLogged){
        res.locals.isLogged=true
        res.locals.userLogged=req.session.userLogged
    }*/

    
}
module.exports = userLoggedMiddleware