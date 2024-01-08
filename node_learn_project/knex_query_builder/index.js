const express = require('express');
const app = express();
const StudentRoutes = require('./routes/StudentRoutes');
app.use('/api', StudentRoutes);
app.listen(4000, () => {
    console.log("Server Is Running ");
})