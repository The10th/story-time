// set up the express app
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

// point the express app to the static files folder so it can set up a static file server
app.use(express.static(path.join(__dirname, 'client')));

// HTTP request logger
var morgan = require('morgan')
app.use(morgan('dev'));

// body parse allows us to use req.body and get post data
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

var routes = require('./server/routes')(app);

// TELL THE SERVER TO LISTEN
app.listen(3000, function() {
	console.log("listening on port: 3k")
})
