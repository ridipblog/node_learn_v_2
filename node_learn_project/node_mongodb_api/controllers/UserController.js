const db = require('../models');
const User = db.users;
const create = async (req, res) => {
    const users = new User({
        name: req.body.name,
        email: req.body.email,
        published: req.body.published ? req.body.published : false
    });
    // users.save(users).then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: "Error"
    //     });
    // });

    const saveUser = await users.save();
    res.status(200).send(saveUser);
}
const find_particula = async (req, res) => {
    const published = req.params.published;
    const userData = await User.find({
        published: published
    });
    res.status(200).send(userData);
}
const find_email = async (req, res) => {
    const email = req.params.email;
    const userData = await User.findOne({
        email: email
    });
    res.status(200).send(userData);
}
const update_data = async (req, res) => {
    const query = {
        email: req.params.email
    };
    const values = {
        $set: {
            name: req.body.name
        }
    };
    const userUpdate = await User.updateOne(query, values);
    res.status(200).send(userUpdate);
}
const deleteData = async (req, res) => {
    const query = {
        email: req.params.email
    };
    const deletdata = await User.deleteOne(query);
    res.status(200).send("Deleted");
}
module.exports = {
    create,
    find_particula,
    find_email,
    update_data,
    deleteData
}