const fs = require("fs");
const path = require("path");
const dataFile = require('../data/dataFile.js')
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require('../../database/models/');
const {validationResult } = require("express-validator")

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsDF = dataFile(productsFilePath)

module.exports = {
    index: async (req, res) => {
        
        
        try {
            const products = await db.Products.findAll()
            return res.render('products/index', {products})

        } catch (error) {
            console.log(error)
            res.send('No funcionó')
        }
    
    },

    detail: async (req, res) => {
        
        
        try {
            const productToFind = req.params.productId
            const product = await db.Products.findOne({where:{id:productToFind}})
            //console.log(product.name)
            if(!product) {
                return res.send('No existe ese producto')
            }
            return res.render('products/detail', { product })

        } catch (error) {
            console.log(error)
            res.send('error! mirá la consola!')
        }
        
        
    },

    new: (req, res) => {
        return res.render('products/new')
    },
    
    create: async (req, res) =>{

        //return res.send(req.body)
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
                image: req.body.image})
            return res.redirect('/products/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
        //productsDF.create(params)
        
        
        
    },

    edit: async (req, res) => {

        try {
            const product = await db.Products.findByPk(req.params.productId)
            //res.send(product)

            if(!product){
                return res.redirect('/products/')
            }
            res.render('products/edit', { product: product })
        } catch (error) {
            res.send(error)
        }
        
    
    },

    update: async (req, res) => {
        
        try{
            await db.Products.update({
                name: req.body.name, 
                price: req.body.price, 
                description: req.body.description,
                category: req.body.category, 
                image: req.body.image},
                    {where: {
                        id: req.params.productId
                    }}
                )

        } catch(error){
            res.send(error)
        }
        
        return res.redirect('/products/')
    },

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
