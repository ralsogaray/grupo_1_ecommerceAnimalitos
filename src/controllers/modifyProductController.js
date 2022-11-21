const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const renderModifyProduct = {
    modify: (req, res) => {
        return res.render('users/modifyProduct.ejs')
    },
    edit: (req, res) => {
        const productId = req.params.productId;
    const productToFind = products.find(
        (product) => product.id == productId
    );
    if(productToFind == undefined){
        return res.send('No existe ese producto')
    }
    return res.render('users/modifyProduct', {
        product: productToFind
    })
    }    
}

module.exports = {renderModifyProduct}