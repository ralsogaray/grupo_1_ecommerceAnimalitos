const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.static(publicFolderPath));
const APP_PORT = process.env.PORT || 3333;

app.listen(APP_PORT, () => {
    console.log('Estoy funcionando en el puerto ' + APP_PORT)
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'));
});

app.get('/cart', (req, res) => {
    res.sendFile(path.resolve('views/cart.html'));
});

app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve('views/productDetail.html'));
});

//**npx nodemon app.js**//
