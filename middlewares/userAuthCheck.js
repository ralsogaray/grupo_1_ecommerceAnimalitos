const authCheck = (req, res, next) =>{
    
    if(req.session.user) {
        return res.redirect("/profile") //CREAR RUTA
    }

    next()
}

module.exports = authCheck