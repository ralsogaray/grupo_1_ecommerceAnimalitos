const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

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
        const params = req.body;
 
        const newProduct = {
            id: products.length + 1,
            image: "alimento-excellent-gatos.png", // TODO: upload image 
            ...params
        }
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        
        return res.redirect('/products/')
    },

    edit: (req, res) => {
        const productId = req.params.productId;
        const product = products.find((product) => product.id == productId);

        if(product === undefined){
            res.redirect('/products/')
            return
        }
        
        res.render('products/edit', { product: product })
    },

    update: (req, res) => {
        const params = req.body;
 
        const ix = products.findIndex((product) => product.id == params.id);

        if (ix < 0) {
            res.redirect('/products/')
            return
        }

        products[ix] = {
            ...products[ix],
            ...params
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        
        return res.redirect('/products/')
    },

    delete: (req, res) =>{
        products = products.filter((product) => product.id != req.params.productId)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        
        return res.redirect('/products/')
    }
}
