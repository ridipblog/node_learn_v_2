const express = require('express');
const app = express();
const StudentRoute = require('./routes/StudentRoutes');
app.use('/api', StudentRoute);
app.listen(3000, () => {
    console.log("Server Running");
});