var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response,
        body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            // messageに犬の画像URL
            const imageUrl = data.message;

            res.send(`
            <!DOCTYPE html>
            <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <title>犬の画像</title>
            </head>
            <body>
                <h1>ランダムな犬の画像</h1>
                <p>${JSON.stringify(data, null, 2)}</p>
                <img src="${imageUrl}" alt="犬の画像" width="400">
            </body>
            </html>
        `);
        }
    });
})
module.exports = router;