module.exports = (sequelize, dataTypes) => {
    const alias = "Products" //nombre de la tabla en plural
    const cols = {
        /*id_products:{
            type: dataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description:{
            type: dataTypes.STRING,
            allowNull: false
        },
        animal_type:{
            type: dataTypes.STRING,
            allowNull: false
        },
        id_category:{
            type: dataTypes.INTERGER,
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