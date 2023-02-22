function admMiddleware(req, res, next) {

    const isUserLogged = req.session && req.session.userLogged
    const isUserAdmin = req.session?.userLogged?.user_type === "admin"

    if(!isUserLogged || (isUserLogged && !isUserAdmin)) {
        // only admin can access /products root path (list of all products)
        // other users are redirected to index
        if (["/products", "/products/"].includes(req.path)) {
            return res.redirect('/')
        }
    }

    return next()
}
module.exports = admMiddleware