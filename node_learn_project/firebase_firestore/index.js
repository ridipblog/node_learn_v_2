const express = require('express');
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./nodepractice-eaf8c-firebase-adminsdk-xgzat-b9448e5d64.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nodepractice-eaf8c-default-rtdb.firebaseio.com"
});
const db = admin.firestore();
app.get('/add-data', async (req, res) => {
    const data = {
        name: 'coder 2',
        email: 'coder2@gmail.com'
    };
    const doc_ref = db.collection('code').doc('coder_2');
    await doc_ref.set(data);
    res.send('Data Added');
});
app.get('/get-data', async (req, res) => {
    const doc_ref = db.collection('code').doc('coder_2');
    var data = null;
    await doc_ref.get().then((result) => {
        data = result.data();
    });
    res.send(data.name);
});
app.get('/update-data', async (req, res) => {
    const doc_ref = db.collection('code').doc('coder_2');
    var data = {
        email: 'coder22@gmail.com'
    };
    await doc_ref.update(data).then(() => {

    });
    res.send("Data Updated ");
});
app.get('/delete-data', async (req, res) => {
    const doc_ref = db.collection('code').doc('coder_2');
    await doc_ref.delete();
    res.send("Data Deleted");
})
app.listen(3000);