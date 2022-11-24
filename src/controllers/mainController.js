const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, {encoding: 'utf-8'}))

const renderHome = (req,res) => {

    
    const catFood = products.filter(product => product.category == 'catFood')
    const dogFood = products.filter(product => product.category == 'dogFood')
    
    const viewProducts = {
        catFood,
        dogFood
    }

    //return  res.send(viewProducts)
    return res.render('index.ejs', viewProducts)
}

module.exports = {
    renderHome
};

