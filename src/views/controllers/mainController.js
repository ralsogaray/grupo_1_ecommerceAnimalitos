 const path = require('path');

 const renderHome = (req,res) => {
    return res.render(path.resolve('./src/views/index.ejs'))
}

const renderLogin = (req,res) => {
    return res.render(path.resolve('./src/views/users/login.ejs'))

}

const renderRegister = (req,res) => {
    return res.render(path.resolve('./src/views/users/register.ejs'))

}

const renderCart = (req,res) => {
    return res.render(path.resolve('./src/views/users/cart.ejs'))

}

const renderProductDetail = (req,res) => {
    return res.render(path.resolve('./src/views/products/productDetail.ejs'))

}

const renderAddProduct = (req, res) =>{
    return res.render(path.resolve('./src/views/users/addProduct.ejs'))
}

const renderModifyProduct = (req, res) =>{
    return res.render(path.resolve('./src/views/users/modifyProduct.ejs'))
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
