//// modules **********************************************
var express = require('express'),
	app = express(),
	//MongoClient = require('mongodb').MongoClient,
    //Server = require('mongodb').Server,
    mongoose = require('mongoose');

    
//// configuration  ***************************************
//var mongoclient = new MongoClient(new Server("localhost", 27017)),	// set localhost
	//db = mongoclient.db('worldcup');									// set db to 'worldcup'
	db = require('./config/db'),										// load database config
    port = process.env.PORT || 9000;									// set the port  

app.configure(function() {
	app.use(express.static(__dirname + '/public'));		// set the static files location /public/img will be /img for users
	app.use(express.logger('dev'));						// log every request to the console
	app.use(express.urlencoded());						// have the ability to pull info from html in POST
	app.use(express.bodyParser());
	//app.use(express.methodOverride());				// have the ability to simulate DELETE and PUT
});

//// routes  **********************************************
require('./app/routes')(app);

//// start applicaton  *****************************
/*
mongoclient.open(function(err, mongoclient) {
	
	if(err) throw err;
	app.listen(port);
	console.log('Express server started on port 9000');
});
*/

// use mongoose to connect to db and start server
mongoose.connect(db.url, function (err) {
	if (err) throw err;
	console.log('Mongodb connected');
	app.listen(port);
	console.log("Express server running on localhost:9000");
});
