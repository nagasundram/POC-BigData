var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var User = require('./app/models/user');

var router = express.Router();

router.route('/users')

.get(function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
});

app.use('/api', router);

app.listen(port);
console.log('Server running at ' + port);
