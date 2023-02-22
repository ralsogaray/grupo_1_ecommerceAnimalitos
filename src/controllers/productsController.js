const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    index: (req, res) => {
        return res.render('products/index', {products})
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

    new: (req, res) => {
        return res.render('products/new')
    },
    
    create: (req, res) =>{
        console.log(req.body)
        const params = req.body;
        console.log(params)

        const newProduct = {
            id: products.length + 1,
            image: "alimento-excellent-gatos.png", // TODO: upload image 
            ...params
        }
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        
        return res.redirect('/products/')
    },
}
