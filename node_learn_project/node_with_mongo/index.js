const express = require('express');
const app = express();
require('./connection/connection');
const CoderRoutes = require('./routes/CoderRoutes');
app.use('/api', CoderRoutes);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server Running ");
})

