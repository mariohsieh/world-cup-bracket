// load Brackets model
//var Nation = require('./models/nation');
var Bracket = require('./models/bracket');

module.exports = function(app) {
	
	// define RESTful api   ***********************************
/*	
	// for brackets
	app.get('/brackets', function(req,res) {
		// grab all brackets from db
		Bracket.find(function(err,doc) {
			if (err) throw err;
			res.json(doc);
		});
	});
*/

/*
	// create new brackets
	app.post('/new', function(req,res) {
		Nation.find(function(err,doc) {
			if (err) throw err;
			res.json(doc);
		});
	});
*/	

	// send all routes to angular front end to be defined
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
/*
	//	error page
	app.use(function(req, res){
		res.type('text/plain');
		res.send(404, 'Page Not Found');
	});
*/
}

