const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: "passport"
});

module.exports = mongoose.model("User", UserSchema);