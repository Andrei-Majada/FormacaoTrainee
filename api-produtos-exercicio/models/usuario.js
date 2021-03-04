var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: "Please enter your name",
                    },
                    len: [5, 60],
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
                unique: true,
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            documento: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {}
    );
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    return User;
};
