const fs = require("fs");
const path = require("path");
const dataFile = require('../data/dataFile.js')
const productsFilePath = path.join(__dirname, "../data/products.json");
const db = require('../../database/models/');

//const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const productsDF = dataFile(productsFilePath)

module.exports = {
    index: (req, res) => {

    
    
        const products = productsDF.list()
        return res.render('products/index', {products})
    },

    detail: (req, res) => {
        const product = productsDF.get(req.params.productId)
        
        if(!product) {
            return res.send('No existe ese producto')
        }

        return res.render('products/detail', { product })
    },

    new: (req, res) => {
        return res.render('products/new')
    },
    
    create: (req, res) =>{
        const params = req.body;
        productsDF.create(params)
        
        return res.redirect('/products/')
    },

    edit: (req, res) => {
        const product = productsDF.get(req.params.productId)

        if(!product){
            return res.redirect('/products/') 
        }
        
        res.render('products/edit', { product: product })
    },

    update: (req, res) => {
        const params = req.body;
        productsDF.update(params.id, params)
        
        return res.redirect('/products/')
    },

    delete: (req, res) =>{
        productsDF.delete(req.params.productId)
        
        return res.redirect('/products/')
    }
}
