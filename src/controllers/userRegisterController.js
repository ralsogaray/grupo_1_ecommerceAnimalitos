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
    register: async (req, res) => {
        const { id, full_name, user_name, email, date_of_birth, password, userImage, interes, user_type } = req.body;
        return res.send(req.file)
        try {
          
          const hashedPassword = await bcrypt.hashSync(password, 10);
    
          await db.Users.create({
            id,
            full_name,
            user_name,
            email,
            date_of_birth,
            password: hashedPassword,
            userImage,
            interes,
            user_type
          });
    
          return res.render('users/login.ejs')
        } catch (error) {
          
          return res.render('users/register', { error: error.message });
       
    } /*,
    delete: (req, res) => {

    }*/
 }
};
