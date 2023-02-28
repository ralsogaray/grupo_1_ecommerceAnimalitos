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
    
        try {
          // Generar hash de la contraseña
          const hashedPassword = await bcrypt.hashSync(password, 10);
    
          // Crear un nuevo usuario en la base de datos
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
    
          // Redireccionar al usuario a pagina de login
          return res.render('users/login.ejs')
        } catch (error) {
          // Mostrar mensaje de error al usuario
          return res.render('users/register', { error: error.message });
       
    } /*,
    delete: (req, res) => {

    }*/
 }
};
