angular.module("AllCtrl", [])

	.controller("AllController", function($scope, Brackets) {

		// initialize parameters on enter
		$scope.heading = "Brackets";
		$scope.description = "All submitted entries";
		$scope.brackets = [];

		// gather all brackets command
		Brackets.get()
			.success(function(data) {
				// display some success message to user
				console.log(data);
				$scope.brackets = data;
			})
			.error(function(data) {
				// display some error message to user
				console.log("no worky");
			});
	});
