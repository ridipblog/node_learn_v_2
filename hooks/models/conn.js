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

db.test = require("./test")(sequelize, DataTypes);
db.employe = require("./employe")(sequelize, DataTypes);
module.exports = db;

// notes:
//     db.sequelize.sync({force:true}).then(()=>{
//     console.log("Table Created");
// }).catch(err=>{
//     console.log(er);
// })

// 1. In force Table will be drop and re created
