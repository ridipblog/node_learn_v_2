const { Op } = require('sequelize');
const db = require('../models/index');
const NotificationModel = db.notifications;
const DistrictModel = db.districts;
const BlockModel = db.blocks;
const addTempData = async (req, res) => {
    const t = await db.sequelize.transaction()
    var check = false;
    try {
        const save_notification = await NotificationModel.create(
            {
                subject: "notification 6",
                district_code: 124,
                block_code: 13
            },
            {
                transaction: t
            }
        );
        t.commit();
        check = true;
    } catch (error) {
        t.rollback();
        check = false;
    }
    await res.status(200).json(check);
}
// Find All Notification
const getAllNotification = async (req, res) => {
    const notify_data = await NotificationModel.findAll(
        {
            include: [
                {
                    model: DistrictModel,
                    as: "districtTable",
                    attributes: [
                        'district_name'
                    ]
                },
                {
                    model: BlockModel,
                    as: "blockTable",
                    attributes: [
                        'block_name'
                    ]
                }
            ]
        }
    );
    await res.status(200).json(notify_data);
}
const getSpecifcNotfification = async (req, res) => {
    const notify_data = await NotificationModel.findAll(
        {
            include: [
                {
                    model: DistrictModel,
                    as: "districtTable",
                    attributes: [
                        'district_name'
                    ]
                },
                {
                    model: BlockModel,
                    as: "blockTable",
                    attributes: [
                        'block_name'
                    ]
                }
            ],
            where: {
                [Op.or]: [
                    {
                        district_code: {
                            [Op.eq]: 124
                        },

                    },
                    {
                        district_code: {
                            [Op.eq]: 999
                        }
                    }
                ]
            }
        }
    )
    await res.status(200).json(notify_data);
}
module.exports = {
    addTempData,
    getAllNotification,
    getSpecifcNotfification
}
