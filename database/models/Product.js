const {sequelize, dataTypes} = require('sequelize')

module.exports = (sequelize, dataTypes) => {
    //const alias = "Products" //nombre de la tabla en plural

    const Products = sequelize.define('Products', {
        
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING,
            allowNull: false
        },
        category:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false
        }
    },
     {timestamps: false}
    )

    return Products

    //const config = {
    //    tableName: "products",
    //    timestamps: false
    //}

    //const Product = sequelize.define(alias, cols, config

    
    
}