var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            name: {
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
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            document: {
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
