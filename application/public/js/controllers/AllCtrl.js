angular.module("AllCtrl", [])

	.controller("AllController", function($scope, Brackets) {

		// initialize parameters on page enter
		$scope.heading = "Brackets";
		$scope.description = "All submitted entries";
		$scope.brackets = [];
		//$scope.showOverlay = false;

		// view single bracket
		$scope.viewSingle = function(data) {
			// view the data of a single bracket
			$scope.showOverlay = true;
			console.log(data);
		}
		
		$scope.exitSingle = function() {
			$scope.showOverlay = false;
			console.log('yes');
			console.log($scope.showOverlay);
		}
		// gather all brackets command
		Brackets.get()
			.success(function(data) {
				// display some success message to user
				//console.log(data);
				$scope.brackets = data;
			})
			.error(function(data) {
				// display some error message to user
				console.log("no worky");
			});
			
		//var now = new Date();	
		//console.log(now);
	});
