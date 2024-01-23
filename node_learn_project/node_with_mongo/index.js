const express = require('express');
const app = express();
require('./connection/connection');
const CoderRoutes = require('./routes/CoderRoutes');
const JoinRoutes = require('./routes/JoinRoutes');
app.use('/api', CoderRoutes);
app.use('/api', JoinRoutes);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("Server Running ");
})

