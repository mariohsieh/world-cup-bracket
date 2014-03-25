angular.module("NewCtrl", [])

	.controller("NewController", function($scope, Nations) {
		$scope.nations = Nations;
		$scope.output = "This page allows user to submit a new bracket entry";
		console.log($scope.nations);
	});
