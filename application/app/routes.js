module.exports = function(app) {
	
	//// server routes ////
		// handle things like api calls
		// authentication routes
		// sample api route

	
	//// front-end routes ////

	// index page
	app.get('/', function(req, res) {
		//res.type('text/plain');
		//res.send('Hello World!');
		res.sendfile('./public/index.html');
	});

	//	error pages
	app.get('*', function(req, res){
		res.type('text/plain');
		res.send('Page Not Found', 404);
	});
}

