module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define(
        "Products",
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            preco: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            categoria: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {}
    );

    return Products;
};
