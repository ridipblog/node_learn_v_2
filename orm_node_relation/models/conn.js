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

// Start Database Relation

// One To One

db.posts = require("./posts")(sequelize, DataTypes);
db.tags = require("./tags")(sequelize, DataTypes);
db.post_tags = require("./post_tags")(sequelize, DataTypes);

// db.students.hasOne(db.posts, { foreignKey: "user_id" });
// db.posts.belongsTo(db.students, { foreignKey: "user_id" });

// db.students.hasOne(db.posts, { foreignKey: "user_id", as: "Postdetails" });
// db.posts.belongsTo(db.students, { foreignKey: "user_id", as: "Postdetails" });

// Belong To

// db.students.hasOne(db.posts, { foreignKey: "user_id", as: "Postdetails" });
// db.posts.belongsTo(db.students, { foreignKey: "user_id", as: "StudentInfo" });

// One To Many

// db.students.hasMany(db.posts, { foreignKey: "user_id", as: "Postdetails" });
// db.posts.belongsTo(db.students, { foreignKey: "user_id", as: "StudentInfo" });

// Many To Many
// db.students.hasMany(db.posts, { foreignKey: "user_id", as: "Postdetails" });
// db.posts.belongsTo(db.students, { foreignKey: "user_id", as: "StudentInfo" });
db.posts.belongsToMany(db.tags, { through: "post_tags", foreignKey: "postID" });
db.tags.belongsToMany(db.posts, { through: "post_tags", foreignKey: "tagID" });
module.exports = db;

// notes:
//     db.sequelize.sync({force:true}).then(()=>{
//     console.log("Table Created");
// }).catch(err=>{
//     console.log(er);
// })

// 1. In force Table will be drop and re created
