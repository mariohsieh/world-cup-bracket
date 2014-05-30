angular.module("appRoutes", [])
	.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
		$routeProvider

			// landing page
			.when("/", {
				templateUrl: "views/home.html",
				controller: "homeController",
			})
			// display all brackets
			.when("/brackets", {
				templateUrl: "views/allBrackets.html",
				controller: "allController"
			})
			// new bracket entry
			.when("/new", {
				templateUrl: "views/newEntry.html",
				controller: "newController"
			})		

			// display one bracket
			.when("/brackets/:id", {
				templateUrl: "views/singleBracket.html",
				controller: "singleController"
			})		
		
			// for routes that don't exist
			.otherwise({
				//template: "404, Page Not Found"
				templateUrl: "views/error.html"
			})
			
		$locationProvider.html5Mode(true);		// removes the # from the URL address bar
				
	}]);
