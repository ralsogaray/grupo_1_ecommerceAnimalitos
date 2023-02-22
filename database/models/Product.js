module.exports = (sequelize, dataTypes) => {
    const alias = "Products" //nombre de la tabla en plural
    const cols = {
        /*id:{
            type: dataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        product-name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        product-description:{
            type: dataTypes.STRING,
            allowNull: false
        },
        animal-type:{
            type: dataTypes.STRING,
            allowNull: false
        },
        category:{
            type: dataTypes.STRING,
            allowNull: false
        },
        price:{
            type: dataTypes.INTERGER,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false
        }
    */}
    const config = {
        tableName: "product",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)


    return Product
}