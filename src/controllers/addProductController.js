const path = require('path');
const fs = require('fs');
const productsFilePath = path.resolve('./data/products.json');
const productsFile = fs.readFileSync(productsFilePath, 'utf-8');
// const productsParse = JSON.parse(productsFile)


const renderAddProduct = (req, res) =>{
    return res.render('users/addProduct.ejs')
}
const storeProduct = (req, res) =>{
    const camposNewProduct = req.body;
    const productJSON = JSON.stringify(camposNewProduct);

    //camposNewProduct.id = productJSON.length;    
    
    fs.writeFileSync(productsFilePath, productJSON);
    
//    fs.writefilesync(productsFilePath, JSON.stringify(product));
    
    return res.send(camposNewProduct)
}

module.exports = {renderAddProduct, storeProduct}