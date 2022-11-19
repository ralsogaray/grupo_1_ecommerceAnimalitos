const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const renderProductDetail =  {
    index: (req,res) => {
        return res.render('products/productDetail.ejs')
    },
    detail: (req, res) => {
    const productId = req.params.productId;
    const productToFind = products.find(
        (product) => product.id == productId
    );
    if(productToFind == undefined){
        return res.send('No existe ese producto')
    }
    const viewData = {
        product: productToFind
    }
    return res.render('productDetail', viewData)
    },
}
module.exports = {renderProductDetail}