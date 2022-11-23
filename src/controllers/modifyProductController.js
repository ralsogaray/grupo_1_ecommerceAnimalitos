const fs = require("fs");
const path = require("path");
const { nextTick } = require("process");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const renderModifyProduct = {
    edit: (req, res) => {
        const productId = req.params.productId;
        const productToFind = products.find(
            (product) => product.id == productId
        );
        if (productToFind == undefined) {
            return res.send('No existe ese producto')
        }
        return res.render('users/modifyProduct', {
            product: productToFind
        })
    },
    modify: (req, res) => {
        const productId = req.params.productId;
        const productToFind = products.find(
            (product) => product.id == productId
        );
        if (productToFind == undefined) {
            return res.send('No existe ese producto')
        }
        return res.render('users/deleteProduct', {
            product: productToFind
        })
    },
    delete: (req, res) => {
        const productId = req.params.productId;
        const productToDelete = products.find(
            (product) => product.id == productId
        );
        if (productToDelete) {
            products.filter(product => product.id !== id);
        } else
            res.render('./products/index.ejs');
    }
}

module.exports = { renderModifyProduct }