const express = require('express');
const db      = require('mongoose');
const parser  = require('body-parser');

const app   = express();
const port  = process.env.PORT || 8000;
const usedb = 'mongodb://127.0.0.1:27017/todolist';

var Task   = require('./app/models/todo.model');
var routes = require('./app/routes/todo.route');

db.Promise = global.Promise;
db.connection.openUri(usedb);
db.connection.once('open', function() {
  console.log('DB Connection established');
});

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port, () => {
  console.log('Live in port: ' + port);
});
