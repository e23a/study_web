const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력 
    fs.createReadStream("./index.html").pipe(res); // 같은 디렉토리에 있는 index.html를 response 함 
});

router.get('/b', (req, res) => {
    res.send("b");
});

module.exports = router;