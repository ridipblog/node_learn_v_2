const express = require('express');
const app = express();

// One To One Relationship
const OneToOneRoute = require('./routes/OneToOne');
const NotificationRoute = require('./routes/NotificationRoute');
app.use('/api', OneToOneRoute);
app.use('/api', NotificationRoute);

app.listen(4000, () => {
    console.log("Server Runing");
});
