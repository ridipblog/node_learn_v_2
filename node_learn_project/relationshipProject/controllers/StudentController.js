const db = require('../models/index');
const StudentModel = db.students;
const StudentBankModel = db.student_banks;
// Add A Student Data
const addData = async (req, res) => {
    var check = false;
    const t = await db.sequelize.transaction();
    try {
        const save_student = await StudentModel.create(
            {
                name: "coder 1",
                email: "coder1@gmail.com"
            },
            {
                transaction: t
            }
        );
        const save_bank = await StudentBankModel.create(
            {
                student_id: save_student.id,
                bank_name: "bank 1"
            },
            {
                transaction: t
            }
        );
        await t.commit();
        check = save_student;
    } catch (error) {
        await t.rollback();
        check = false;
    }
    res.status(200).json({
        message: check
    });
}
module.exports = {
    addData
}
