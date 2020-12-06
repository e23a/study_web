
const express = require('express');

const port = process.env.PORT || 8000;
const app = express();

app.get('/', function (req, res) {
  res.send('hello, world!');
})


// var com = morgan('combined', {
//     skip: function (req, res) { return res.statusCode < 400 }
//   });
// app.use(com);



const webgl = require('./routers/webgl');
app.use('/webgl', webgl);

app.listen(port, () => {
    console.log('server is listening at localhost:', port);
});

