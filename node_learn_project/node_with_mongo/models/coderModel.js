const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const coderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}
);
coderSchema.plugin(autoIncrement, { inc_field: 'pri_id' });
module.exports = mongoose.model('coderModel', coderSchema, 'coders');
