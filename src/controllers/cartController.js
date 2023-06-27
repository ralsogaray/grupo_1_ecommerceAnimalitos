
const db = require('../../database/models/');

// show cart 
const renderCart = async (req,res) => {

    const products = await db.Carts.findAll({where:{user_email:userLogged.email}})

    let sumaProductos = 0
    if(products){
        
        products.forEach(producto => {
            sumaProductos = sumaProductos + producto.price
        });
    //console.log(sumaProductos)
    }
    
    return res.render('users/cart.ejs', { products, sumaProductos })

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

// delete product from cart DB
const deleteProduct = async (req, res) =>{
    
    
    const productToDestroy = await db.Carts.findOne({where:{id:req.params.id}})
    
    try {
        
        await db.Carts.destroy({
            where:{
                id: productToDestroy.id
            }
        })
        
        return res.redirect('/cart/')

    } catch (error) {
        return res.send(error)
    }
}

module.exports = {renderCart, addProduct, deleteProduct};