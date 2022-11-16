 const path = require('path');

 const renderHome = (req,res) => {
    return res.render(('index.ejs'))
}
//usuarios
const renderLogin = (req,res) => {
    return res.render('users/login.ejs')

}
//usuarios
const renderRegister = (req,res) => {
    return res.render('users/register.ejs')

}
// cart
const renderCart = (req,res) => {
    return res.render('users/cart.ejs')

}

// controlador productos
const renderProductDetail = (req,res) => {
    return res.render('products/productDetail.ejs')

}
// controlador productos
const renderAddProduct = (req, res) =>{
    return res.render('users/addProduct.ejs')
}
// controlador productos
const renderModifyProduct = (req, res) =>{
    return res.render('users/modifyProduct.ejs')
}

module.exports = {
    renderHome, 
    renderLogin,
    renderRegister,
    renderCart,
    renderProductDetail, 
    renderAddProduct,
    renderModifyProduct
}
