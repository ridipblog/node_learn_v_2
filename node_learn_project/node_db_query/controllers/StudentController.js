const db = require('../models/index.js');
const student = require('../models/students');
const student_bank = require('../models/studentbank.js');
const StudentModel = db.students;
const StudentBankModel = db.student_banks;
const addData = async (req, res) => {
    var check = false;
    const t = await db.sequelize.transaction();
    const save_data =
    {
        student_id: 0,
        bank_name: "icic "
    };

    try {
        const save_student = await StudentModel.create(
            {
                name: "name 1",
                email: "email1@gmail.com"
            },
            {
                transaction: t,
            }
        );
        for (var i = 1; i <= 3; i++) {
            console.log(save_student.id);
            save_data.student_id = save_student.id;
            save_data.bank_name = save_data.bank_name + i;
            const saveed = await saveData(StudentBankModel, save_data, t);
        }
        await t.commit();
        check = save_student;
    } catch (error) {
        await t.rollback();
        check = false;
    }
    res.status(200).json({
        message: check.id
    });
}
const saveData = async (model, data_object, t) => {
    const save_data = await model.create(
        data_object,
        {
            transaction: t
        }
    );
    return true;
}
module.exports = {
    addData
}