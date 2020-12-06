
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


const webgl = require('./routers/webgl');
app.use('/webgl', webgl);



app.listen(port, () => {
    console.log('server is listening at localhost:', port);
});