const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});
authorSchema.plugin(autoIncrement, { inc_field: 'author_pri_id' });
module.exports = mongoose.model('authorModel', authorSchema, 'authors');
