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
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error");
  });
const db = {};
db.Sequelize = sequelize;
db.sequelize = sequelize;
db.products = require("./productModel.js")(sequelize, DataTypes);
db.review = require("./reviewModel.js")(sequelize, DataTypes);
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Re Sync");
  })
  .catch((err) => {
    console.log("Error");
  });

db.products.hasMany(db.review, { foreignKey: "product_id", as: "review_info" });
db.review.belongsTo(db.products, {
  foreignKey: "product_id",
  as: "product_info",
});
module.exports = db;
