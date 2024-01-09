const knex = require('../Config/index');
const addData = async (req, res) => {
    var check;
    var transaction = await knex.transaction();
    try {

        // for (var i = 0; i < 4; i++) {
        //     var save_district = await transaction('districts')
        //         .insert({
        //             district_name: "District " + i.toString(),
        //             district_code: 120 + i
        //         });
        //     var save_block = await transaction('blocks')
        //         .insert({
        //             block_name: "Block " + i.toString(),
        //             block_code: 1210 + i
        //         });
        // }
        var notify_data = await transaction('notifications')
            .insert({
                subject: "subject 5",
                district_id: 121,
                block_id: 1211
            });
        transaction.commit();
        check = notify_data;
    } catch (error) {
        if (transaction) {
            transaction.rollback();
        } else {
            console.log("Error");
        }
        check = error;
    }
    await res.status(200).json({ message: check });
}
// Get All Notifications
const getAllNotification = async (req, res) => {
    var data;
    try {
        data = await knex.table('notifications as notify')
            .join('districts as dist', 'dist.district_code', '=', 'notify.district_id')
            .join('blocks as blk', 'blk.block_code', '=', 'notify.block_id');
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data })
}
// Get Notification By District And Block
const getDistBlkNotify = async (req, res) => {
    var data;
    var district_code = 120;
    var block_code = 1210;
    try {
        data = await knex.table('notifications as notify')
            .where(function () {
                this.where('notify.district_id', district_code)
                    .orWhere('notify.district_id', 999)
            })
            .where(function () {
                this.where('notify.block_id', block_code)
                    .orWhere('notify.block_id', 999)
            })
            .leftJoin('districts as dist', 'dist.district_code', '=', 'notify.district_id')
            .leftJoin('blocks as blk', 'blk.block_code', '=', 'notify.block_id').
            select(
                'notify.*',
                'dist.district_name',
                'blk.block_name'
            )
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data });
}
// Get Notifications By Distrcit And Block Approch 2
const getDistBlkNotify_2 = async (req, res) => {
    var data;
    var district_code = 120;
    var block_code = 1210;
    try {
        data = await knex.table('notifications as notify')
            .whereIn('notify.district_id', [district_code, 999])
            .whereIn('notify.block_id', [block_code, 999])
            .leftJoin('districts as dist', 'dist.district_code', '=', 'notify.district_id')
            .leftJoin('blocks as blk', 'blk.block_code', '=', 'notify.block_id')
            .select(
                'notify.*',
                'dist.district_name',
                'blk.block_name'
            )
    } catch (error) {
        data = error;
    }
    res.status(200).json({ message: data });
}
module.exports = {
    addData,
    getAllNotification,
    getDistBlkNotify,
    getDistBlkNotify_2
}
