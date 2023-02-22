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
    // delete: (req, res) => {
    //     const productId = req.params.productId;
    //     const productToDelete = products.find(
    //         (product) => product.id == productId
    //     );
    //     if (productToDelete) {
    //         const productDeleted = products.filter(product => product.id != productId);
    //         const productJson = JSON.stringify(productDeleted);
    //         return fs.writeFileSync(productsFilePath, productJson)
    //     } else
    //         res.render('./products/index.ejs');
    // },
    update: (req, res) => {
        const dataToUpdate = req.body;
        const productId = req.params.productId;
        const productToEdit = products.findIndex(
            (product) => product.id == productId
        );
        const oldData = products[productToEdit];
        products[productToEdit]= {
            ...oldData,
            ...dataToUpdate
        }     
        //console.log(dataToUpdate) 
        const productJson = JSON.stringify(products, null, 2);
        fs.writeFileSync(productsFilePath, productJson)
        return res.render('./products/index.ejs');
    }
}


module.exports = { renderModifyProduct }