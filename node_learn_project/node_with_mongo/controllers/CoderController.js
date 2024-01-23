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
        await session.startTransaction();
        const save_coder = new CoderModel({
            name: "coder 5",
            email: "coder5@gmail.com"
        });
        const save_coder_1 = new CoderModel({
            name: "coder 6",
            email: "coder6@gmail.com"
        });
        await save_coder.save({ session });
        await save_coder_1.save({ session });
        await session.commitTransaction();
        data = true;
    } catch (error) {
        console.error('Transaction error:');
        await session.abortTransaction();
        data = false;
    } finally {
        session.endSession();
    }
    res.status(200).json({ message: data });
}
// Find all coders data
const findAllCoderData = async (req, res) => {
    var data;
    try {
        // data = await  CoderModel.find().select('name email pri_id');
        data = await CoderModel.find().select('name email pri_id').exec();
    } catch (error) {
        data = false;
    }
    res.status(200).json({
        message: data
    });
}
// Find specfic user data
const findOneCoder = async (req, res) => {
    var data;
    try {
        // 1st Type of Query Execution
        data = await CoderModel.findOne({ name: 'coder 26' })
            .select('name').exec();

        // 2nd Type of Query Execution
        data = await CoderModel.findOne({ name: 'coder 27' })
            .select('email');

        // 3rd Type of Query Execution
        data = await CoderModel.findOne({
            name: 'coder 26'
        }).where(
            'name'
        ).equals(
            'coder 26'
        ).select(
            'name email',
        );

        // 4rd Type of Query Execution
        data = await CoderModel.find({
            $or: [
                {
                    name: 'coder 2',
                },
                {
                    email: 'coder12@gmail.com'
                    // email: { $ne: 'coder26@gmail.com' } not equals to
                }
            ],
        });
    } catch (error) {
        data = false;
    }
    res.status(200).json({
        message: data
    });
}
const findOneCoder2 = async (req, res) => {
    var data;
    try {
        // ----------------frist method ----------------------
        data = await CoderModel.findOne({
            name: "coder 2",
            email: "coder1@gmail.com"
        });
        // --------------- second method -----------------
        data = await CoderModel.findOne({
            $and: [
                {
                    name: 'coder 1'
                },
                {
                    email: 'coder1@gmail.com'
                }
            ]
        });
        // ----------------- thrid method -------------------
        data = await CoderModel.findOne({
            $and: [
                {
                    $or: [
                        {
                            name: 'coder '
                        },
                        {
                            name: 'coder 2'
                        }
                    ]
                },
                {
                    $or: [
                        {
                            email: 'coder@gmail.com'
                        },
                        {
                            email: 'coder2@gmail.com'
                        }
                    ]
                }
            ]
        });
    } catch (error) {
        data = error;
    }
    return res.status(200).json({ data: data });
}
const deleteAllCoders = async (req, res) => {
    const session = await db.mongoose.startSession();
    var check;
    try {
        await session.startTransaction();
        const del_all_coders = await CoderModel.deleteMany({}, { session });
        await session.commitTransaction();
        check = true;
    } catch (error) {
        await session.abortTransaction();
        check = false;
    }
    return res.status(200).json({
        check: check
    });
}
module.exports = {
    addCoder,
    addCoderWithTransaction,
    findAllCoderData,
    findOneCoder,
    findOneCoder2,
    deleteAllCoders
}
