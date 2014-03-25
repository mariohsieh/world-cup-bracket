//// modules **********************************************
var express = require('express'),
	app = express(),
    mongoose = require('mongoose');

    
//// configuration  ***************************************
	database = require('./config/database'),			// load database config
    port = process.env.PORT || 9000;					// set the port  

app.configure(function() {
	app.use(express.static(__dirname + '/public'));		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev'));						// log every request to the console
	app.use(express.urlencoded());						// have the ability to pull info from html in POST
	//app.use(express.bodyParser());
	app.use(express.methodOverride());					// have the ability to simulate DELETE and PUT
});

//// routes  **********************************************
require('./app/routes')(app);

//// start applicaton  *****************************
// use mongoose to connect to db and start server
mongoose.connect(database.url, function (err) {
	if (err) throw err;
	console.log('MongoDB connected');
	app.listen(port);
	console.log("Express server running on localhost:9000");
});
