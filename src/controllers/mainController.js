//const path = require('path');

const renderHome = (req,res) => {
    return res.render(('index.ejs'))
}

/* controlador productos
const renderProductDetail = (req,res) => {
    return res.render('products/productDetail.ejs')
}*/

// controlador productos
/*const renderAddProduct = (req, res) =>{
    return res.render('users/addProduct.ejs')
}*/
// controlador productos
const renderModifyProduct = (req, res) =>{
    return res.render('users/modifyProduct.ejs')
}

module.exports = {
    renderHome, 
    /*renderProductDetail, */
    
    renderModifyProduct
}
