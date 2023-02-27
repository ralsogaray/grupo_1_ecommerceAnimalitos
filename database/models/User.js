module.exports = (sequelize, dataTypes) => {
    const alias = "Users" //nombre de la tabla en plural
    const cols = {
        /*id_users:{
            type: dataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
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
            alloNull: true
        }
    */}
    const config = {
        tableName: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)


    return User
}