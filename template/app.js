const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const indexRouter = require('./routes/index')
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);

const port = process.env.PORT || '3000';
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('listening', function() {
  console.log('listening on port ' + port);
});

module.exports = app;