const Excel = require('excel4node');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/download-excel', (req, res) => {
    // Create a new Excel workbook and worksheet
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    // Define your data to export (sample data)
    const data = [
        ['Name', 'Age', 'City'],
        ['John Doe', 30, 'New York'],
        ['Jane Smith', 28, 'Los Angeles'],
        ['Bob Johnson', 35, 'Chicago'],
    ];

    // Define column headers


    // Populate data
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            worksheet.cell(i + 2, j + 1).string(data[i][j].toString());
        }
    }

    // Generate a unique file name
    const fileName = `exported-data-${Date.now()}.xlsx`;

    // Save the workbook to a file
    const filePath = `./${fileName}`;
    workbook.write(filePath, (err, stats) => {
        if (err) {
            console.error('Error exporting Excel file:', err);
            res.status(500).send('Error exporting Excel file');
        } else {
            console.log(`Excel file "${fileName}" exported successfully.`);
            // Set the response headers to indicate file download
            res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
            res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

            // Pipe the file to the response stream and send it for download
            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);

            // Delete the temporary file after sending
            fileStream.on('end', () => {
                fs.unlinkSync(filePath);
            });
        }
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
