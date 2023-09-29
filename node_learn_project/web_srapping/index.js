const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const websiteUrl = 'https://pradummna.github.io/nft/';
        const response = await axios.get(websiteUrl);
        // console.log(response);
        const $ = cheerio.load(response.data);
        const pageTitle = $('title').text();
        const headingText = $('p').text();
        var imageUrls = [];
        $('img').each((index, element) => {
            const src = $(element).attr('src');
            if (src) {
                imageUrls.push(src);
            }
        });
        console.log(imageUrls);
        console.log(pageTitle);
        console.log(headingText);
        res.status(200).send({
            pageTitle: pageTitle,
            headingText: headingText
        })
        // res.json({ pageTitle, headingText });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while scraping data.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
