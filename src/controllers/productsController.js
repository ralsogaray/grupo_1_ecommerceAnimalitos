
//const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require('../../database/models/');
const { validationResult } = require("express-validator")


module.exports = {

    //show all products
    index: async (req, res) => {
        
        
        try {
            const products = await db.Products.findAll()
            return res.render('products/index', {products})

        } catch (error) {
            console.log(error)
            res.send('No funcionó')
        }
    
    },

    // show one product on detail
    detail: async (req, res) => {
        
        try {
            const productToFind = req.params.productId
            const product = await db.Products.findOne({where:{id:productToFind}})
            
            if(!product) {
                return res.send('No existe ese producto')
            }
            return res.render('products/detail', { product })

        } catch (error) {
            console.log(error)
            res.send('error! mirá la consola!')
        }
        
        
    },

    // new product form
    new: (req, res) => {
        return res.render('products/new')
    },
    
    // create product on DB
    create: async (req, res) =>{

        const resultValidation = validationResult(req) 

        if(resultValidation.errors.length > 0){
            return res.render("products/new.ejs", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })}

        try {
            await db.Products.create({
                name: req.body.name, 
                price: req.body.price, 
                description: req.body.description,
                category: req.body.category, 
                image: req.file.filename})
            return res.redirect('/products/')
        } catch (error) {
            console.log(error)
            return res.send(error)
        }
        
    },

    // edit product view with db
    edit: async (req, res) => {
        try {
            const product = await db.Products.findByPk(req.params.productId)

            if(!product){
                return res.redirect('/products/')
            }
            return res.render('products/edit', { product: product })
        } catch (error) {
            res.send(error)
        }
    },
    // update product on DB
    update: async (req, res) => {
        /*
        const resultValidation = validationResult(req) 

        if(resultValidation.errors.length > 0){
            return res.render("products/edit.ejs", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })}
        */
        try{
            await db.Products.update({
                name: req.body.name, 
                price: req.body.price, 
                description: req.body.description,
                category: req.body.category, 
                image: req.file.filename},
                    {where: {
                        id: req.params.productId
                    }}
                )

        } catch(error){
            return res.send(error)
        }
                            
        return res.redirect(`/products/${req.params.productId}`)
    },
    
    // delete product on DB
    delete: async (req, res) =>{
        
        try {
            await db.Products.destroy({
                where:{
                    id: req.params.productId
                }
            })
        } catch (error) {
            res.send(error)
        }
        return res.redirect('/products/')
    }
}
