const db = require('../models');
const Order = db.orders;
const create = async (req, res) => {
    const saveData = new Order({
        order_id: req.body.order_id,
        user_id: req.body.user_id
    });
    const data = await saveData.save();
    res.status(200).send(data);
}
const findOrders = async (req, res) => {
    const user = await Order.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'product_id',
                foreignField: 'unique_id',
                as: "orderdetails"
            }
        }
    ]);
    res.status(200).send(user);
}
module.exports = {
    create,
    findOrders
}