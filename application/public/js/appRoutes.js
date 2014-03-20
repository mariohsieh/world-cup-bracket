angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider

		// landing page
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController",
		})
		// display all brackets
		.when("/brackets", {
			templateUrl: "views/allbrackets.html",
			controller: "AllController"
		})
		// new bracket entry
		.when("/new", {
			templateUrl: "views/newentry.html",
			controller: "NewController"
		})		
/*						
		// display one bracket
		.when("/brackets/:id", {
			templateUrl: "views/singlebracket.html",
			controller: "SingleBracketController"
		})		
*/		
		// for routes that don't exist
		.otherwise({
			//template: "404, Page Not Found"
			templateUrl: "views/error.html"
		})
		
	$locationProvider.html5Mode(true);		// removes the # from the URL address bar
				
}]);
