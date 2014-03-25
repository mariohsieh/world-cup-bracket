angular.module("NewCtrl", [])

	.controller("NewController", function($scope, Nations) {
		// page title and description
		$scope.heading = "Group Stage";
		$scope.description = "Please choose two nations from each group.";
		
		// load nations model into $scope
		$scope.nations = Nations;
		$scope.groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

		$scope.selectgroup = function(data) {
			$scope.teams = $scope.nations.getgroup(data);
			//console.log($scope.teams);
		}
		
		//$scope.teams = $scope.nations.getgroup('A');
	});
