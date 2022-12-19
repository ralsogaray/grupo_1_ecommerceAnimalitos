const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports = {
    renderRegister: (req,res) => {
        return res.render('users/register.ejs')
    
    },
    store: (req, res) =>{
        const camposNewUser = req.body;
        const usersJSON = JSON.stringify(camposNewUser);
        camposNewUser.id = usersJSON.length;
        users.push(camposNewUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
       
    return res.render('index.ejs');
    }
};
