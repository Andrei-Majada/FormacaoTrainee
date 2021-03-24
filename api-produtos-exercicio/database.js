
function DataBase(models) {
    models.sequelize
        .sync()
        .then(function () {
            console.log("\nDatabase connected");
        })
        .catch(function (err) {
            console.log(err, "Something went wrong with the db connection");
        });
}

module.exports = DataBase;
