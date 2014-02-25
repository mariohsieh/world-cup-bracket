var express = require('express'),
	 app = express(),
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

var mongoclient = new MongoClient(new Server("localhost", 27017));
//var db = mongoclient.db('worldcup');

// for index page
app.get('/', function(req, res) {
	res.send('Hello World!');
	
});

//	for pages that do not exists
app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

// open mongodb client
mongoclient.open(function(err, mongoclient) {

    if(err) throw err;

    app.listen(9000);
    console.log('Express server started on port 9000');
});
