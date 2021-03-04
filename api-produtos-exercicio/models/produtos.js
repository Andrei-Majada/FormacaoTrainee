module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "Product",
        {
            name: {
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

    return Product;
};
