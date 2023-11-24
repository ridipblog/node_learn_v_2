const express = require('express');
const app = express();
const hbs = require('hbs')
const multer = require('multer');
const bodyParser = require('body-parser');
const encoded = bodyParser.urlencoded({ extended: true });
const storage = multer.diskStorage({
    destination: function (req, file, done) {
        done(null, 'uploads/');
    },
    filename: function (req, file, done) {
        done(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });
app.set('view engine', 'hbs');

// upload Single File 

app.get('/', (req, res) => {
    res.render('file_upload');
});
app.post("/upload", encoded, upload.single('file'), async (req, res) => {
    const file = req.file;
    if (!file) {
        console.log("No file Found");
    } else {
        const file_data = {
            filename: file.filename,
            originalname: file.originalname,
            size: file.size,
            mimetype: file.mimetype,
            destination: file.destination,
            path: file.path,
        }
        console.log(file_data);
    }
    res.send("");
});

// Upload Multiple File
app.get('/multiple', (req, res) => {
    res.render('multiple_files');
});
app.post("/multi_upload", encoded, upload.array('files', 3), async (req, res) => {
    console.files = req.files;
    console.log("Ok");
    res.send("");
})
app.listen(4000, () => {
    console.log("Server Start");
})