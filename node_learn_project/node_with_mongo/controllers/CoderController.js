const db = require('../models/index');
const CoderModel = db.coders;
// Simple Add Data
const addCoder = async (req, res) => {
    var data = false;
    try {
        const save_coders = new CoderModel({
            name: "coder 4",
            email: "coder4@gmail.com"
        });
        data = await save_coders.save();
    } catch (error) {
        data = false;
    }
    await res.status(200).json({ message: data });
}
// Add Data With Transaction
const addCoderWithTransaction = async (req, res) => {
    var data;
    const session = await db.mongoose.startSession();
    try {
        await session.withTransaction(async () => {
            const save_coder = new CoderModel({
                name: "coder 16",
                email: "coder16@gmail.com"
            });
            const save_coder_1 = new CoderModel({
                name: "coder 17",
                email: "coder17@gmail.com"
            });
            await save_coder.save();
            await save_coder_1.save();

        });
        // await session.commitTransaction();
        data = true;
    } catch (error) {
        console.error('Transaction error:', error);
        try {
            // Attempt to abort the transaction
            await session.abortTransaction();
        } catch (abortError) {
            console.error('Abort transaction error:', abortError);
        }
        data = false;
    }
    res.status(200).json({ message: data });
}
module.exports = {
    addCoder,
    addCoderWithTransaction
}
