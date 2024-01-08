const knex = require('../Config/index');
const addData = async (req, res) => {
    var data;
    try {
        var transaction = await knex.transaction();
        var student_data = await transaction('students').insert({
            name: "student 5",
            email: "student5@gmail.com"
        });
        var bank_data = await transaction('student_bank_details').insert({
            student_id: student_data,
            bank_name: "bank 5"
        });
        for (var i = 0; i < 1; i++) {
            var education_data = await transaction('student_education_details').insert({
                student_id: student_id,
                board_name: "board Name 5" + i.toString()
            });
        }
        transaction.commit();
        data = student_data;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        }
        data = error;
    }
    res.status(200).json({ message: data });
}
// Get All Student Data 
const getAllStudent = async (req, res) => {
    var data;
    try {
        data = await knex.table('students').select('*');
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data });
}
// Get Data Specific Student 
const getStudentData = async (req, res) => {
    var data;
    try {
        data = await knex.table('students as std')
            .where('std.id', 4)
            .join('student_bank_details as std_bank', 'std.id', '=', 'std_bank.student_id')
            .join('student_education_details as std_education', 'std.id', '=', 'std_education.student_id')
            .select(
                'std.*',
                'std_bank.bank_name',
                'std_education.board_name'
            );
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data[0] });
}
const getStudentData_1 = async (req, res) => {
    var data;
    try {
        data = await knex.table('students as std')
            .where('std.id', 4)
            .join('student_education_details as std_education', function () {
                this.on(function () {
                    this.on('std_education.student_id', '=', 'std.id')
                });
            });
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data });
}

module.exports = {
    addData,
    getAllStudent,
    getStudentData,
    getStudentData_1
}