const express = require('express');
const app = express();
const StudentRoutes = require('./routes/StudentRoutes');
const NotificationRoutes = require('./routes/NotificationRoutes');
app.use('/api', StudentRoutes);
app.use('/api', NotificationRoutes);
app.listen(4000, () => {
    console.log("Server Is Running ");
})
