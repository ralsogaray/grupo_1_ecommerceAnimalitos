const express = require('express');
const app = express();
const APP_PORT = process.env.PORT || 3333;
const path = require('path');
const publicFolderPath = path.resolve('public');


//routes required
const mainRouter = require ('./src/routers/mainRouter');
const userLoginRouter = require ('./src/routers/userLoginRouter');
const userRegisterRouter = require ('./src/routers/userRegisterRouter');
const cartProducts = require('./src/routers/cartRouter')
const productDetail = require('./src/routers/productDetailRouter')
const addProduct = require('./src/routers/addProductRouter')
const modifyProduct = require('./src/routers/modifyProductRouter')


// find public resources
app.use(express.static(publicFolderPath));


// ejs 
app.set('view engine', 'ejs')
app.set('views', './src/views')
//

app.listen(APP_PORT, () => {
    console.log('Estoy funcionando en el puerto ' + APP_PORT)
});


// routes
app.use(mainRouter);
app.use(userLoginRouter)
app.use(userRegisterRouter)
app.use(cartProducts)
app.use(productDetail)
app.use(addProduct)
app.use(modifyProduct)



//**npx nodemon app.js**//
