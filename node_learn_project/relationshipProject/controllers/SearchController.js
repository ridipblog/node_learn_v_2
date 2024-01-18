const { Op, where } = require('sequelize');
const db = require('../models/index');
const knex = require('../config/knex');
const WebDeveloperModel = db.web_developers;
const DesignationsModel = db.designations;
const addData = async (req, res) => {
    var check = false;
    try {
        const t = await db.sequelize.transaction();
        for (var i = 0; i < 3; i++) {
            const save_data = await WebDeveloperModel.create({
                name: "web developer 2" + i.toString(),
                email: "webdeveloper2" + i.toString() + "@gmail.com",
                designation: 1 + i
            }, {
                transaction: t
            });
        }
        await t.commit();
        check = true;
    } catch (err) {
        await t.rollback();
        check = false;
    }
    return await res.status(200).json({
        message: "Ok"
    });
}
// Search One Input By Model
const onInputSearchFrist = async (req, res) => {
    var search_query = req.body.search_query;
    var data;
    try {
        data = await WebDeveloperModel.findAll({
            include: [
                {
                    model: DesignationsModel,
                    as: 'desig_table',
                    attributes: [
                        'designation_name'
                    ]
                }
            ],
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${search_query}%`
                        }
                    },
                    {
                        email: {
                            [Op.like]: `%${search_query}%`
                        }
                    },
                    {
                        '$desig_table.designation_name$': {
                            [Op.like]: `%${search_query}%`
                        }
                    }
                ]
            },
        })
    } catch (err) {
        data = err;
    }
    return await res.status(200).json({
        message: data
    })
}
// Search on input By Knex
const onInputSearchSecond = async (req, res) => {
    var data;
    var search_query = req.body.search_query;
    try {
        data = await knex.table('webdevelopers as web_dev')
            .orWhere('web_dev.name', 'like', `%${search_query}%`)
            .orWhere('web_dev.email', 'like', `%${search_query}%`)
            .orWhere('desig.designation_name', 'like', `%${search_query}%`)
            .leftJoin('designations as desig', 'desig.id', '=','web_dev.designation')
            .select(
                'web_dev.*',
                'desig.designation_name'
            )
    } catch (err) {
        data = err;
    }
    return await res.status(200).json({
        message: data
    });
}
module.exports = {
    addData,
    onInputSearchFrist,
    onInputSearchSecond
}
