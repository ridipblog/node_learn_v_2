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

db.video = require("./video")(sequelize, DataTypes);
db.image = require("./image")(sequelize, DataTypes);
db.comment = require("./comment")(sequelize, DataTypes);
db.tags = require("./tags")(sequelize, DataTypes);
db.tag_taggable = require("./tag_taggable")(sequelize, DataTypes);

// Polymorphi One To Many

db.image.hasMany(db.comment, {
  foreignKey: "commenttableId",
  constraints: false,
  scope: {
    commenttabeType: "image",
  },
});
db.video.hasMany(db.comment, {
  foreignKey: "commenttableId",
  constraints: false,
  scope: {
    commenttabeType: "video",
  },
});
db.comment.belongsTo(db.image, {
  foreignKey: "commenttableId",
  constraints: false,
});
db.comment.belongsTo(db.video, {
  foreignKey: "commenttableId",
  constraints: false,
});

// Polymorphi Many To Many

db.image.belongsToMany(db.tags, {
  through: {
    model: db.tag_taggable,
    unique: false,
    scope: {
      taggableType: "image",
    },
  },
  foreignKey: "taggableId",
  constraints: false,
});
db.tags.belongsToMany(db.image, {
  through: {
    model: db.tag_taggable,
    unique: false,
    scope: {
      taggableType: "image",
    },
  },
  foreignKey: "tagId",
  constraints: false,
});

db.video.belongsToMany(db.tags, {
  through: {
    model: db.tag_taggable,
    unique: false,
    scope: {
      taggableType: "video",
    },
  },
  foreignKey: "taggableId",
  constraints: false,
});

db.tags.belongsToMany(db.video, {
  through: {
    model: db.tag_taggable,
    unique: false,
    scope: {
      taggableType: "video",
    },
  },
  foreignKey: "tagId",
  constraints: false,
});
module.exports = db;

// notes:
//     db.sequelize.sync({force:true}).then(()=>{
//     console.log("Table Created");
// }).catch(err=>{
//     console.log(er);
// })

// 1. In force Table will be drop and re created
