const db = require('../models');
const Product = db.products;
const create = async (req, res) => {
    const data = new Product({
        unique_id: req.body.unique_id,
        product_name: req.body.product_name
    });
    const saveData = await data.save();
    res.status(200).send(saveData);
}
module.exports = {
    create
}