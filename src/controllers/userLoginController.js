const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt')

const usersFilePath = path.join(__dirname, "../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))

const db = require('../../database/models/');


const renderLogin = async (req,res) => {
    
    return res.render('users/login.ejs')
}

const processLogin = async (req, res) =>{
    
    try{

        const data = req.body
        const userToFind = await db.Users.findOne({where:{email:data.email}})
        //res.send(userToFind)
        
        if(userToFind == undefined){
            return res.render("users/login.ejs", {
                errors: {
                    email: {
                        msg: 'Las credenciales son incorrectas'
                    } 
                }
            })
        }
    
        
        if(data.password == userToFind.password && data.email == userToFind.email ){
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



    } catch(error){
        console.log(error)
        res.render('algo salió mal')
    }
    

}

const renderProfile = async (req, res) =>{
    
    //console.log(req.cookies.userEmail)
    res.render('users/profile.ejs')
}

const logOut = (req, res) =>{
    //res.clearCookie('userEmail') 
    req.session.destroy()
    return res.redirect('/')

}




module.exports = {renderLogin, processLogin, renderProfile, logOut};