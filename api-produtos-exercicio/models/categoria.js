module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {}
    );

    return Category;
};
