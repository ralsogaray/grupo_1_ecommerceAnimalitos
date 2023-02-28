const {sequelize, dataTypes} = require('sequelize')


module.exports = (sequelize, dataTypes) => {
    
    const Users = sequelize.define('Users', {

        full_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        user_name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        date_of_birth:{
            type: dataTypes.STRING,
            allowNull: false
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false
        },
        userImage:{
            type: dataTypes.STRING,
            allowNull: true
        },
        user_type:{
            type: dataTypes.STRING,
            allowNull: true
        }
    },
        {timestamps: false}
    )

    return Users
}