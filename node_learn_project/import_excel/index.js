const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const encoded = bodyParser.urlencoded({ extended: true });
const Exceljs = require('exceljs');
const multer = require('multer');
const db = require('./models/index');
const User = db.users;
app.set("view engine", 'hbs');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.get('/', (req, res) => {
    res.render('import_excel');
});
app.post("/upload", encoded, upload.single('file'), async (req, res) => {
    if (req.file) {
        const workbook = new Exceljs.Workbook();
        await workbook.xlsx.load(req.file.buffer);
        const worksheet = workbook.getWorksheet(1);
        worksheet.eachRow({ includeEmpty: false }, async (row, rowNumber) => {
            console.log(row.getCell(1).value);
            const data = {
                name: row.getCell(1).value,
                email: row.getCell(2).value
            };
            const save_user = await User.create(data);
        });
    } else {
        console.log("no File");
    }
    res.send("");
});
app.listen(4000, () => {
    console.log("Server Start");
})