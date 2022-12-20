const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt')

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))




const renderLogin = (req,res) => {

    
    return res.render('users/login.ejs')

}

const processLogin = (req, res) =>{
    const data = req.body
    
    const hash = bcrypt.hashSync(data.password, 10)
    //deposito el usuario
    const userToFind = users.find(
        (usuario) => usuario.email == data.email
    );
    
    if(userToFind == undefined){
        return res.render("users/login.ejs")
    }
    else if(data.password == userToFind.password){
        req.session.user = userToFind
        return res.render("users/profile.ejs", userToFind)
    }
/** 
    
    //const comparedPassword = bcrypt.compareSync(data.password, hash)
    //console.log(comparedPassword)
    
    
    
    if(userToFind == undefined){
        return res.render("users/login.ejs")
    }
    else{
        req.session.user = userToFind
        return res.send(req.session.user.user_name)
    }
    //res.send(userToFind)
    /^
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