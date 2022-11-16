const express = require('express');
const app = express();
const APP_PORT = process.env.PORT || 3333;
const path = require('path');
const publicFolderPath = path.resolve('public');
const mainRouter = require ('./src/views/routers/mainRouter');
//const methodOverride = require('method-override');


app.use(express.static(publicFolderPath));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());
//app.use(methodOverride('_method'));

app.set('view engine', 'ejs')

app.set('views', './src/views')


app.listen(APP_PORT, () => {
    console.log('Estoy funcionando en el puerto ' + APP_PORT)
});

app.use(mainRouter);
//**npx nodemon app.js**//
