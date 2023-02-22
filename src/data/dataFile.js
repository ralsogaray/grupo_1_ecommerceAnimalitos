const fs = require("fs");

const dataFile = function(path) {
    return {
        list: function() {
            return JSON.parse(fs.readFileSync(path, "utf-8"))
        },
        get: function(id) {
            let products = this.list()

            return products.filter((product) => product.id == id)[0]
        },
        create: function(attribs) {
            let products = this.list()
 
            const newProduct = {
                id: products.length + 1,
                image: "alimento-excellent-gatos.png", // TODO: upload image 
                ...attribs
            }
            products.push(newProduct)
            this.save(products)

            return products
        },
        update: function(id, attribs) {
            let products = this.list()

            const ix = products.findIndex((product) => product.id == id)  
            if (ix < 0) {
                return null
            }
    
            products[ix] = {
                ...products[ix],
                ...attribs
            }
            this.save(products)

            return products
        },
        delete: function(id) {
            let products = this.list()

            products = products.filter((product) => product.id != id)
            this.save(products)
            
            return products
        },
        save: function(products) {
            fs.writeFileSync(path, JSON.stringify(products, null, 2));
        }
    }
}

module.exports = dataFile