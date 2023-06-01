function admMiddleware(req, res, next) {

    const isUserLogged = req.session && req.session.userLogged
    const isUserAdmin = req.session?.userLogged?.user_type === "admin"

    if(!isUserLogged || (isUserLogged && !isUserAdmin)) {
        // only admin can access /products root path (list of all products)
        // other users are redirected to index
        //console.log(req.path)
        if (["/products", "/products/"].includes(req.path)) {
            return res.redirect('/')
        }

        if (["/products/new", "/products/new/"].includes(req.path)) {
            return res.redirect('/')
        }

        if (["/products/create", "/products/create/"].includes(req.path)) {
            return res.redirect('/')
        }

        if (req.path.startsWith("/products/edit/")) {
            return res.redirect('/')
        }

        if (["/products/update", "/products/update/"].includes(req.path)) {
            return res.redirect('/')
        }

        if (req.path.startsWith("/products/delete/")) {
            return res.redirect('/')
        }
    }

    return next()
}
module.exports = admMiddleware