const express = require('express');
const cors = require('cors');
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const db = require('./models');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected ");
}).catch(err => {
    console.log("Connection Error");
});
var UserRoute = require('./Routes/userRoute');
app.use('/api/', UserRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Running");
});