const db = require('../models/index');
db.mongoose.set('strictQuery', false);
db.mongoose.connect(
    db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected ");
}).catch(err => {
    console.log("Error With Connection");
});

