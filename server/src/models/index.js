const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config");
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(__dirname).filter((file)=>{
    return file !== "index.js"
}).forEach((file)=>{
    const model = require(path.join(__dirname,file))(sequelize, Sequelize.DataTypes);
    //const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
})

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
