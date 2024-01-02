const express = require('express');
const app = express();

// One To One Relationship
const OneToOneRoute = require('./routes/OneToOne');
app.use('/api', OneToOneRoute);

app.listen(4000, () => {
    console.log("Server Runing");
});
