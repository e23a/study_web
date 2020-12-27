
const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname));
app.get('/', function (req, res) {
  
  //res.writeHead(200,{"Content-Type":"text/html"}); // 웹페이지 출력 
  fs.createReadStream("./asdf/index.html").pipe(res);
});



app.listen(port, () => {
    console.log('server is listening at localhost:', port);
});

