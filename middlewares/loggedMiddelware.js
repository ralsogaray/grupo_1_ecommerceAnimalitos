const fs = require("fs");
const path = require("path");


//const usersFilePath = path.join(__dirname, "../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))



function userLoggedMiddleware(req,res,next){
    res.locals.isLogged = false
    //console.log("chau middel")
    
    
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true
        res.locals.user = req.session.userLogged.user_name
        res.locals.userIsAdmin = req.session.userLogged.user_type === "admin"
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