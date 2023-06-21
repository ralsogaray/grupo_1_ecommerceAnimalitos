//const fs = require("fs");
//const path = require("path");
const bcrypt = require('bcrypt')
const {validationResult } = require("express-validator")

//const usersFilePath = path.join(__dirname, "../data/users.json");
//const users = JSON.parse(fs.readFileSync(usersFilePath, {encoding: 'utf-8'}))

const db = require('../../database/models/');


const renderLogin = async (req,res) => {
    
    return res.render('users/login.ejs')
}

const processLogin = async (req, res) =>{

    const resultValidation = validationResult(req) 
    
    
    try{
        if(resultValidation.errors.length > 0){
            
            return res.render("users/login.ejs", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })}
        
        
        const data = req.body
        const userToFind = await db.Users.findOne({where:{email:data.email}})
        
        // admin log in
        if(data.password == userToFind.password && data.email == userToFind.email && userToFind.user_type == "admin" ){
            req.session.userLogged = userToFind
            userLogged = req.session.userLogged
            
            if(data.recordame == "on"){
                res.cookie('userEmail', data.email, {maxAge: (1000 * 60) * 4})
                console.log(req.cookies.userEmail)
            }
            return res.redirect("profile")
        }

        // user log in
        if(userToFind){
            //comparing passwords between the one in de DB and the user trying to log in
            const okForLogging = bcrypt.compareSync(data.password, userToFind.password)
            

            if(okForLogging){
                
                req.session.userLogged = userToFind
                userLogged = req.session.userLogged
            
                if(data.recordame == "on"){
                    
                    res.cookie('userEmail', data.email, {maxAge: (1000 * 60) * 4})
                }
                return res.redirect("profile")
            }
            return res.render("users/login.ejs", {
                errors: {
                    password: {
                        msg: 'Contraseña Incorrecta'
                    } 
                }
            })

        }

    } catch(error){
        console.log(error)
        res.send('algo salió mal')
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

const destroyUser = async (req, res) => {
    
    try {
        const userToFind = await db.Users.findOne({where:{email:userLogged.email}})
        //return res.send(userToFind.email)
        await db.Users.destroy({
            where:{
                id: userToFind.id
            }
        })
        req.session.destroy()
        return res.redirect('/login/')

    } catch (error) {
        return res.send(error)
    }
    
    
}




module.exports = {renderLogin, processLogin, renderProfile, logOut, destroyUser};