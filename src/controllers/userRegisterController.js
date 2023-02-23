const fs = require("fs");
const path = require("path");
const bcrypt = require('bcrypt');
const db = require('../../database/models/');
const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports = {
    renderRegister: (req,res) => {
        return res.render('users/register.ejs')
    
    },
    register: (req, res) =>{
        const camposNewUser = req.body;
        const saltrounds = 10;
        camposNewUser.password = bcrypt.hashSync(camposNewUser.password, saltrounds)
        camposNewUser.id = users.length + 1;
        users.push(camposNewUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
       
    return res.redirect('./');
    }
};
