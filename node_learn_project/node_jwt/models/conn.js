const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connect");
  })
  .catch((err) => {
    console.log(err);
  });
const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;
db.users = require("./UserModel.js")(sequelize, DataTypes);
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Re Sync");
  })
  .catch((err) => {
    console.log("Error");
  });
module.exports = db;
