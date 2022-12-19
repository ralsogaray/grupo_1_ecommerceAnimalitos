const express = require('express');
const app = express();
const APP_PORT = process.env.PORT || 3333;
const path = require('path');
const publicFolderPath = path.resolve('public');
const methodOverride = require('method-override');

/// Sprint 5
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// sprint 5
app.use(cookieParser())
app.use(session({
    secret: 'secret word'
}))

//routes required
const mainRouter = require('./src/routers/mainRouter');
const userLoginRouter = require('./src/routers/userLoginRouter');
const userRegisterRouter = require('./src/routers/userRegisterRouter');
const cartProducts = require('./src/routers/cartRouter')
const productsRouter = require('./src/routers/products')
const modifyProduct = require('./src/routers/modifyProductRouter')

//const mainRouter = require ('./src/views/routers/mainRouter');

// find public resources
app.use(express.static(publicFolderPath));

// ejs 
//=======


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
app.use(productsRouter)
app.use(modifyProduct)



//**npx nodemon app.js**//