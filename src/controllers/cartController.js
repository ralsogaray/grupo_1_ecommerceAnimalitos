
const db = require('../../database/models/');


const renderCart = async (req,res) => {

    const products = await db.Carts.findAll({where:{user_email:userLogged.email}})
    //return res.send(product)
    return res.render('users/cart.ejs', { products })

}

// add product to DB
const addProduct = async (req, res) => {
    
    const usuario = userLogged.email
    const productToBuy = await db.Products.findOne({where:{id:req.body.productId}})
    
    try {
        
        await db.Carts.create({
            name: productToBuy.name, 
            price: productToBuy.price, 
            description: productToBuy.description,
            category: productToBuy.category, 
            image: productToBuy.image,
            user_email: usuario
        })
        return res.redirect('/cart/')

    } catch (error) {
        res.send('no funciona')
        console.log(error)
    }
}

const deleteProduct = async (req, res) =>{
    res.send("eliminar producto!")
}

module.exports = {renderCart, addProduct, deleteProduct};