var mongoose = require('mongoose');
const Int32 = require("mongoose-int32").loadType(mongoose);
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    order_id: {
        type: Int32,
    },
    user_id: {
        type: Int32
    },
}, {
    collection: "orders"
});

module.exports = mongoose.model('User', UserSchema)