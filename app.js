const express = require('express');
const app = express();
const APP_PORT = process.env.PORT || 3333;
const path = require('path');
const publicFolderPath = path.resolve('public');
const mainRouter = require ('./src/views/routers/mainRouter');

app.set('view engine', 'ejs')

app.use(express.static(publicFolderPath));


app.listen(APP_PORT, () => {
    console.log('Estoy funcionando en el puerto ' + APP_PORT)
});

app.use(mainRouter);
//**npx nodemon app.js**//
