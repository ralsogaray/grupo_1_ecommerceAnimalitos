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
        
        
        try {
          
          const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
          
          await db.Users.create({
            id: req.body.id,
            full_name: req.body.full_name,
            user_name: req.body.user_name,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            password: hashedPassword,
            userImage: req.file.filename,
            interes: req.body.interes,
            user_type: req.body.user_type
          });
    
          return res.render('users/login.ejs')
        } catch (error) {
          console.log(error)
          return res.send(error);

      }
    }
};
