'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
            file !== basename &&
            file.slice(-3) === '.js' &&
            file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// One To One Relation
db.students = require('./stduents')(sequelize, Sequelize.DataTypes);
db.student_banks = require('./studentbank')(sequelize, Sequelize.DataTypes);
db.student_educations = require('./studenteducation')(sequelize, Sequelize.DataTypes);

// -----------------Notification relations ----------------------
db.districts = require('./districts')(sequelize, Sequelize.DataTypes);
db.blocks = require('./blocks')(sequelize, Sequelize.DataTypes);
db.notifications = require('./notifications')(sequelize, Sequelize.DataTypes);

// db.students.hasOne(db.student_banks, { foreignKey: "student_id", as: "student_bank_details" });
// db.students.hasMany(db.student_educations, { foreignKey: "student_id", as: "student_education_details" });
// db.student_banks.belongsTo(db.students, { foreignKey: "student_id", as: "student_bank_details" });
// db.student_educations.belongsTo(db.students, { foreignKey: "student_id", as: "student_education_details" });

db.students.hasOne(db.student_banks, { foreignKey: "student_id", as: "student_bank_details" });
db.students.hasMany(db.student_educations, { foreignKey: "student_id", as: "student_education_details" });
db.student_banks.belongsTo(db.students, { foreignKey: "student_id", as: "studentData" });
db.student_educations.belongsTo(db.students, { foreignKey: "student_id", as: "studentData" });
// ---------------------Notification Relationship --------------------
db.districts.hasMany(db.notifications, { foreignKey: "district_id", sourceKey: "district_code", as: "notifications" });
db.blocks.hasMany(db.notifications, { foreignKey: "block_id", sourceKey: "block_code", as: "notifications" });
db.notifications.belongsTo(db.districts, { foreignKey: "district_id", targetKey: "district_code", as: "districtTable" });
db.notifications.belongsTo(db.blocks, { foreignKey: "block_id", targetKey: "block_code", as: "blockTable" });

module.exports = db;
