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
    
    const userToFind = users.find(
        (usuario) => usuario.email == data.email
    );
    
    if(userToFind == undefined){
        return res.render("users/login.ejs", {
            errors: {
                email: {
                    msg: 'Las credenciales son incorrectas'
                } 
            }
        })
    }
    else if(data.password == userToFind.password && data.email == userToFind.email){
        req.session.userLogged = userToFind
        userLogged = req.session.userLogged
        
        //console.log( data.recordame )

        if(data.recordame == "on"){
            //console.log( data.recordame )
            res.cookie('userEmail', data.email, {maxAge: (1000 * 60) * 4})
            console.log(req.cookies.userEmail)
        }
        return res.redirect("profile")
    }

}

const renderProfile = (req, res) =>{
    console.log(req.cookies.userEmail)
    res.render('users/profile.ejs')
}

const logOut = (req, res) =>{
    //res.clearCookie('userEmail') 
    req.session.destroy()
    return res.redirect('/')

}




module.exports = {renderLogin, processLogin, renderProfile, logOut};