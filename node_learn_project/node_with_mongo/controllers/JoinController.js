const db = require('../models/index');
const AuthorModel = db.authors;
const BookModel = db.books;
const addData = async (req, res) => {
    var check;
    const session = await db.mongoose.startSession();
    try {
        await session.startTransaction();
        const save_author = await AuthorModel({
            name: "author 2"
        });
        const save_book = await BookModel({
            book: 'book 2',
            authors: save_author._id
        });
        await save_author.save({ session });
        await save_book.save({ session });
        await session.commitTransaction();
        check = true;
    } catch (error) {
        await session.abortTransaction();
        check = false;
    }
    return await res.status(200).json({ check: check });
}
const findAllData = async (req, res) => {
    var data;
    try {
        // ------------- get author data and book data using aggregate --------------
        data = await AuthorModel.aggregate([
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: 'authors',
                    as: 'books'
                }
            }
        ]);
        // ----------------------- get books data with authors data using  mongoose functions -------------------
        // --------------------- method 1 ---------------------------
        data = await BookModel.find().populate('authors');

    } catch (error) {
        data = error;
    }
    return await res.status(200).json({ data: data });
}
const findOneAuthor = async (req, res) => {
    var data;
    try {

        // --- get specific author data with book data using mongoose--------
        data = await AuthorModel.findOne({
            name: 'author 1'
        }).populate('books');

    } catch (error) {
        data = error;
    }
    return await res.status(200).json({ data: data });
}
module.exports = {
    addData,
    findAllData,
    findOneAuthor
}
