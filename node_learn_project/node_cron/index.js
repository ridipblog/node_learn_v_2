const express = require("express");
const app = express();
const cron = require("node-cron");
const moment = require("moment");
app.listen(3000);
// cron.schedule("* * * * * *", () => {
//   console.log(
//     "Runing The Task Every Second",
//     moment().format("DD MMM YYYY hh:mm:ss")
//   );
// });

// Step Value
// cron.schedule("*/10 * * * * *", () => {
//   console.log(
//     "Runing The Task Every 10 seconds",
//     moment().format("DD MMM YYYY hh:mm:ss")
//   );
// });

// Range Value

// cron.schedule("5-10 * * * * *", () => {
//   console.log(
//     "Runing The Task Every Between 5 to 10 second",
//     moment().format("DD MMM YYYY hh:mm:ss")
//   );
// });
//  Multiple Value
cron.schedule("5,10,20 * * * * *", () => {
  console.log(
    "Runing The Task Every  5, 10,and 20 second",
    moment().format("DD MMM YYYY hh:mm:ss")
  );
});
