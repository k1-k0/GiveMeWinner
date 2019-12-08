const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const picker = require('./routes/router');

const app = express();
const port = 34567;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/pick', picker);

app.listen(port, () => console.log(`Start listening on port ${port}...`));
