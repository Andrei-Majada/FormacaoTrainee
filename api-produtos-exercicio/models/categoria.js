module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {}
    );

    Category.associate = (models) => {
        Category.hasMany(models.Products, {
            foreignKey: "categoria",
            allowNull: false,
            as: "categoriaNome",
        });
    };

    return Category;
};
