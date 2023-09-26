const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("nodesql", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: { max: 5, min: 0, idle: 10000 },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("conntected");
  })
  .catch((err) => {
    console.log(err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Table Created");
  })
  .catch((err) => {
    console.log(er);
  });

db.users = require("./users")(sequelize, DataTypes);
db.contact = require("./contact")(sequelize, DataTypes);
db.users.hasMany(db.contact, { foreignKey: "userId" });
db.contact.belongsTo(db.users, { foreignKey: "userId" });
db.users.belongsToMany(db.contact, {
  through: db.contact,
});
db.contact.belongsToMany(db.users, {
  through: db.contact,
});
module.exports = db;

// notes:
//     db.sequelize.sync({force:true}).then(()=>{
//     console.log("Table Created");
// }).catch(err=>{
//     console.log(er);
// })

// 1. In force Table will be drop and re created
