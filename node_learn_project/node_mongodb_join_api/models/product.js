var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Int32 = require("mongoose-int32").loadType(mongoose);

var ProductSchema = new Schema({
    unique_id: {
        type: Int32
    },
    product_name: {
        type: String,
    },
}, {
    collection: "products"
});

module.exports = mongoose.model('Product', ProductSchema)