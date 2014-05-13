angular.module("SingleCtrl", [])

	.controller("SingleController", function($scope) {

		// initialize parameters on enter
		$scope.heading = "Single Bracket";
		$scope.description = "Submitted bracket details";
		$scope.brackets = [];

/*
		// get single bracket command
		Brackets.get()
			.success(function(data) {
				// display some success message to user

			})
			.error(function(data) {
				// display some error message to user
				console.log("no worky");
			});
*/			
		//var now = new Date();	
		//console.log(now);
	});
