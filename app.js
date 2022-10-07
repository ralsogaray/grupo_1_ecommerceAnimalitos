const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.static(publicFolderPath));
const APP_PORT = 3333

app.listen(APP_PORT, () => {
    console.log ('estoy funcionando en el puerto ' + APP_PORT)});

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('views/index.html'));
    });


