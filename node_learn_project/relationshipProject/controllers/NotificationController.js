const { Op } = require('sequelize');
const db = require('../models/index');
const NotificationModel = db.notifications;
const DistrictModel = db.districts;
const BlockModel = db.blocks;
const addTempData = async (req, res) => {
    const t = await db.sequelize.transaction()
    var check = false;
    try {
        const save_notify = await NotificationModel.create(
            {
                subject: "Notification 6",
                district_id: 999,
                block_id: 999
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
                        district_id: {
                            [Op.eq]: 120
                        },

                    },
                    {
                        district_id: {
                            [Op.eq]: 999
                        }
                    }
                ]
            }
        }
    )
    await res.status(200).json(notify_data);
}
const getDistrictBlockNotify = async (req, res) => {
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
                        district_id: {
                            [Op.eq]: 120
                        }
                    },
                    {
                        district_id: {
                            [Op.eq]: 999
                        }
                    }
                ],
                [Op.or]: [
                    {
                        block_id: {
                            [Op.eq]: "1230"
                        }
                    }, {
                        block_id: {
                            [Op.eq]: "999"
                        }
                    }
                ]
            }
        }
    );
    res.status(200).json(notify_data);
}
module.exports = {
    addTempData,
    getAllNotification,
    getSpecifcNotfification,
    getDistrictBlockNotify
}
