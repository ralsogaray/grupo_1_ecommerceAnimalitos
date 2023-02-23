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

// Middlewares
const loggedMiddelware = require('./middlewares/loggedMiddelware')
const adminMiddleware = require('./middlewares/adminMiddleware')
app.use(loggedMiddelware)
app.use(adminMiddleware)


// sprint 6


//routes required
const mainRouter = require('./src/routers/mainRouter');
const userLoginRouter = require('./src/routers/userLoginRouter');
const userRegisterRouter = require('./src/routers/userRegisterRouter');
const cartProducts = require('./src/routers/cartRouter')
const productsRouter = require('./src/routers/products')

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
app.use(productsRouter)

//**npx nodemon app.js**//