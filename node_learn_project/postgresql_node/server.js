const sequelize = require('./config');
const EmployeData = require('./employe_data');
sequelize.sync({ force: false }).then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log("Error");
})
EmployeData.create({
    user_name: 'Coder 1',
    study: 'bca'
}).then((user) => {
    console.log(user.toJSON());
})