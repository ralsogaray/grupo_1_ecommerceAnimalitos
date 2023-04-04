const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, {encoding: 'utf-8'}))

const db = require('../../database/models/');

const renderHome = async(req,res) => {

    try {
        const productsDB = await db.Products.findAll()
        const catFood = productsDB.filter(product => product.category == 'catFood')
        const dogFood = productsDB.filter(product => product.category == 'dogFood')

        const viewProducts = {
                catFood,
                dogFood
            }
        //res.send(viewProducts)
        return res.render('index.ejs', viewProducts) 

    } catch (error) {

        res.send(error)
    }
    
}

module.exports = {
    renderHome
};

