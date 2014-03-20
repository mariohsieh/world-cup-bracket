module.exports = function(app) {
	
	//// server routes ////
		// handle things like api calls
		// authentication routes
		// sample api route
 		var nations = require('./models/nations.js');
		//nations.groupDisplay("A");
		//nations.allDisplay(); 
		var test = {'hello' : "there"};
	//// front-end routes ////
	// configure routes on front-end with routeProvider
	app.get('*', function(req, res) {
		//res.type('text/plain');
		//res.send('Hello World!');
		res.sendfile('./public/index.html');
		res.render('./public/index', {
			//alpha: test
		})
	});
/*
	//	error page
	app.use(function(req, res){
		res.type('text/plain');
		res.send(404, 'Page Not Found');
	});
*/
}

