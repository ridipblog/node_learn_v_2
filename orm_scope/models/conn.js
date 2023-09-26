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
db.students = require("./students")(sequelize, DataTypes);
db.posts = require("./posts")(sequelize, DataTypes);

db.students.addScope("checkStatus", {
  where: {
    status: 1,
  },
});
db.students.addScope("checkGender", {
  where: {
    gender: "male",
  },
});
db.students.addScope("includePost", {
  include: {
    model: db.posts,
  },
});
db.students.addScope("attributes", {
  attributes: ["name", "email"],
});
db.students.hasMany(db.posts, { foreignKey: "user_id" });
db.posts.belongsTo(db.students.scope("checkStatus"), {
  foreignKey: "user_id",
});

module.exports = db;

// notes:
//     db.sequelize.sync({force:true}).then(()=>{
//     console.log("Table Created");
// }).catch(err=>{
//     console.log(er);
// })

// 1. In force Table will be drop and re created
