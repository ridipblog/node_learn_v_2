const { Op } = require('sequelize');
const db = require('../models/index');

const StudentModel = db.students;
const StudentBankModel = db.student_banks;
const StudentEducationModel = db.student_educations;

// Add A Student Data
const addData = async (req, res) => {
    var check = false;
    const t = await db.sequelize.transaction();
    try {
        const save_student = await StudentModel.create(
            {
                name: "coder 3",
                email: "coder3@gmail.com"
            },
            {
                transaction: t
            }
        );
        const save_bank = await StudentBankModel.create(
            {
                student_id: save_student.id,
                bank_name: "bank 3"
            },
            {
                transaction: t
            }
        );
        for (var i = 1; i < 3; i++) {
            var save_education = await StudentEducationModel.create(
                {
                    student_id: save_student.id,
                    board_name: "coder 3" + i
                },
                {
                    transaction: t
                }
            )
        }
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
// Find by Email
const findByEmail = async (req, res) => {
    var check = false;
    var student_data;
    try {
        student_data = await StudentModel.findAll({
            attributes: ['name', 'email'],
            include: [
                {
                    model: StudentBankModel,
                    as: "student_bank_details",
                    attributes: [['student_id', 'std_id'], 'bank_name'],
                },
                {
                    model: StudentEducationModel,
                    as: "student_education_details",
                    attributes: ['id', 'student_id', 'board_name'],

                }
            ],
            where: {
                email: "coder3@gmail.com",
            },
        });
        check = true;
    } catch (error) {
        check = false;
    }
    if (check) {
        res.status(200).json(student_data);
    } else {
        res.status(400).json("Not Found !");
    }
}
// Find Data By Email And Include Model Where
const findByEmailOther1 = async (req, res) => {
    var check = false;
    var student_data;
    try {
        student_data = await StudentModel.findAll({
            attributes: ['name', 'email'],
            include: [
                {
                    model: StudentBankModel,
                    as: "student_bank_details",
                    attributes: [['student_id', 'std_id'], 'bank_name'],
                    where: {
                        student_id: 3
                    },
                    // required:false for left join
                },
                {
                    model: StudentEducationModel,
                    as: "student_education_details",
                    attributes: ['id', ['student_id', 'std_id'], 'board_name']
                }
            ],
            where: {
                email: "coder3@gmail.com",
            },
            // raw: false,
            // nest: false
        });
        check = true;
    } catch (error) {
        check = false;
    }
    if (check) {
        res.status(200).json(student_data);
    } else {
        res.status(400).json(check)
    }
}
// FInd Data With Where And Or Where With OP Methods
const findByEmailOther2 = async (req, res) => {
    var check;
    var student_data;
    try {
        student_data = await StudentModel.findAll({
            attributes: ['name', 'email'],
            include: [
                {
                    model: StudentBankModel,
                    as: "student_bank_details",
                },
                {
                    model: StudentEducationModel,
                    as: "student_education_details"
                }
            ],
            where: {
                email: {
                    [Op.eq]: "coder2@gmail.com",
                },
                [Op.or]: [
                    {
                        name: {
                            [Op.eq]: "coder 34"
                        }

                    },
                    {
                        name: {
                            [Op.eq]: "coder 2"
                        }
                    }
                ]
            }
        });
        check = true;
    } catch (error) {
        check = false;
    }
    if (check) {
        res.status(200).json(student_data);
    } else {
        res.status(400).json(check);
    }
}
module.exports = {
    addData,
    findByEmail,
    findByEmailOther1,
    findByEmailOther2
}
