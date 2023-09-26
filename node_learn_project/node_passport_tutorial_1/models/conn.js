const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/ridip";
db.users = require('./User');
module.exports = db;