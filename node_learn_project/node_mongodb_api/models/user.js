// module.exports = mongoose => {
//     const User = mongoose.model(
//         "user",
//         mongoose.Schema({
//             name: String,
//             email: String,
//             published: Boolean
//         }, {
//             timestamps: true
//         })
//     );
//     return User;
// }


// If you use this app with a front - end that needs id field instead of _id, you have to override toJSON method that map
// default object to a custom object.So the Mongoose model could be modified as following code:


// module.exports = mongoose => {
//     var schema = mongoose.Schema({
//         title: String,
//         description: String,
//         published: Boolean
//     }, {
//         timestamps: true
//     });

//     schema.method("toJSON", function () {
//         const {
//             __v,
//             _id,
//             ...object
//         } = this.toObject();
//         object.id = _id;
//         return object;
//     });

//     const Tutorial = mongoose.model("tutorial", schema);
//     return Tutorial;
// };

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    published: Boolean,
}, {
    collection: "users"
});

module.exports = mongoose.model('User', UserSchema)