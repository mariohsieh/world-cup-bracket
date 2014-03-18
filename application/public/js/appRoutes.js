angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	$routeProvider
	
		// home page
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeController"
		})
		
		// error page
		.when("*", {
			templateUrl: "views/error.html",
			controller: "ErrorController"
		})
	
	$locationProvider.html5Mode(true);
				
}]);
