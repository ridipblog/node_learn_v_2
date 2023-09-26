// const express = require('express');
// const firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
// const app = express();
// firebase.initializeApp({
//     apiKey: "AIzaSyBm2V-attNF0G-ynotciKU88EzWNtLiL_0",
//     authDomain: "nodepractice-eaf8c.firebaseapp.com",
//     projectId: "nodepractice-eaf8c",
//     storageBucket: "nodepractice-eaf8c.appspot.com",
//     messagingSenderId: "686742502843",
//     appId: "1:686742502843:web:bec80c497f71bf6685189e",
//     measurementId: "G-3RYRD3FESG"
// });

const express = require('express');
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./nodepractice-eaf8c-firebase-adminsdk-xgzat-b9448e5d64.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nodepractice-eaf8c-default-rtdb.firebaseio.com"
});
const db = admin.database();
app.get('/saveData', (req, res) => {

    const newData = {
        name: 'coder 2'
    }
    const ref = db.ref('code/' + newData.name);
    ref.set(newData);
    res.send("Data Saved");
});
app.get('/readData', async (req, res) => {
    // const data = await getData();
    const data = await getSpecificdata();
    res.send(data);
});
app.get('/updateData', async (req, res) => {
    const ref = db.ref("code/coder 1");
    var newData = {
        name: 'coder 11'
    }
    await ref.update(newData).then();
    res.send("Data Updated !");
});
app.get('/remove', async (req, res) => {
    const ref = db.ref('code/coder 1');
    await ref.remove();
    res.send("Removed");
});
async function getData() {
    const ref = db.ref("code/coder 1");
    var data = null;
    await ref.once('value', (spanshot) => {
        data = spanshot.val();
    })
    return data;
}
async function getSpecificdata() {
    const ref = db.ref("code/");
    var data = null;
    await ref.child('coder 2').once('value', (spanshot) => {
        console.log(data)
    }).then((spanshot) => {
        data = spanshot.val();
    })
    return data;
}
app.listen(3000);