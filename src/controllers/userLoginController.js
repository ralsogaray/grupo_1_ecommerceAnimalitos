const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))




const renderLogin = (req,res) => {

    
    return res.render('users/login.ejs')

}

const processLogin = (req, res) =>{
    //const data = req.body
    //res.send(data)

    const user = req.body.email;
    
    const userToFind = users.find(
        (usuario) => usuario.email == user
    );

    if(userToFind == undefined){
        return res.send(users)
    }
    //res.send(userToFind)
    /*
    if (productToFind == undefined) {
        return res.send('No existe ese producto')
    }
    return res.render('users/deleteProduct', {
        product: productToFind
    })
    console.log(data)
    */
}



module.exports = {renderLogin, processLogin};