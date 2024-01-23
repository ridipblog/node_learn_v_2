const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
const bookSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    authors: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authorModel'
    }
});

bookSchema.plugin(autoIncrement, { inc_field: 'book_pri_id' });
module.exports = mongoose.model('bookModel', bookSchema, 'books');
