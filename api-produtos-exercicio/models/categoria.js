module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        "Category",
        {
            name: {
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
