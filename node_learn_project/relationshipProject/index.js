const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// One To One Relationship
const OneToOneRoute = require('./routes/OneToOne');
const NotificationRoute = require('./routes/NotificationRoute');
// Search Functions
const SearchRoute = require('./routes/SearchRoutes');
app.use('/api', OneToOneRoute);
app.use('/api', NotificationRoute);
app.use('/api', SearchRoute);

app.listen(4000, () => {
    console.log("Server Runing");
});
