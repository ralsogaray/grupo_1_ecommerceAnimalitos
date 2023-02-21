const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {
        return res.render('products/index', {
            productHighlights: products.filter(product => product.category == 'catFood'), 
            accessoryHighlights: products.filter(product => product.category == 'dogFood')
        })
    },

    detail: (req, res) => {
        const productId = req.params.productId;
        const productToFind = products.find(
            (product) => product.id == productId
        );
        if(productToFind == undefined){
            return res.send('No existe ese producto')
        }
        return res.render('products/detail', {
            product: productToFind
        })
        },

    create: (req, res) => {
        return res.render('products/create')
    },
    
    store: (req, res) =>{
        const camposNewProduct = req.body;
        const productJSON = JSON.stringify(camposNewProduct);
    //camposNewProduct.id = productJSON.length;

        fs.writeFileSync(productsFilePath, productJSON);
    
    //    fs.writefilesync(productsFilePath, JSON.stringify(product));
    
    return res.send(camposNewProduct)
    },
}
