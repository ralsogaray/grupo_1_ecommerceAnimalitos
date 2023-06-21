
const db = require('../../database/models/');


const renderCart = (req,res) => {
    return res.render('users/cart.ejs')

}

const addProduct = async (req, res) => {
    //return res.send(req.body)
    const usuario = userLogged.email
    //res.send(usuario)
    const productToBuy = await db.Products.findOne({where:{id:req.body.productId}})
    try {
        //const userBuyer = await db.Users.findOne({where:{email:userLogged.email}})
        
    
       // return res.send(productToBuy)
        await db.Carts.create({
            name: productToBuy.name, 
            price: productToBuy.price, 
            description: productToBuy.description,
            category: productToBuy.category, 
            image: productToBuy.image,
            user_email: usuario
        })
        return res.redirect('/cart/')

       
       // const userBuyer_id = userBuyer.id
       
    } catch (error) {
        res.send('no funciona')
        console.log(error)

    }
}



module.exports = {renderCart, addProduct};