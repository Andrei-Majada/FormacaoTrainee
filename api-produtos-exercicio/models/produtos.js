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
        },
        {}
    );

    Products.associate = (models) => {
        Products.belongsTo(models.Category, {
            foreignKey: "categoria",
            allowNull: false,
            onDelete: "CASCADE",
            as: "categoriaNome",
        });
    };

    return Products;
};
