const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const corsOrigin = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOrigin));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const db = require('./models');
db.mongoose.connect(
    db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Conected");
}).catch(err => {
    console.log("Connection Error");
});
const limiter = rateLimit({
    max: 3,
    windowMs: 60000,
    message: "Too Many Attement"
});
app.use(limiter);
const ProductRouter = require('./routes/ProductRoute');
const OrderRouter = require('./routes/OrderRoute');
app.use("/api/product/", ProductRouter);
app.use("/api/order/", OrderRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server Running ");
});