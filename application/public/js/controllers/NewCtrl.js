angular.module("NewCtrl", [])

	.controller("NewController", function($scope, Nations) {
		
		// set initial parameters on group stage enter
		function initial() {
			// page title and description
			$scope.heading = "Group Stage";
			$scope.description = "Please choose two nations from each group";
			
			// load nations model into $scope
			$scope.nations = Nations;
			$scope.groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

			// create object for bracket selections
			picks = {};

			// default to group A onload
			$scope.teams = $scope.nations.getGroup('A');
			$scope.groupLetter = 'A';
			firstPlace = "First Place";
			secondPlace = "Second Place";
			$scope.gfirst = firstPlace;
			$scope.gsecond = secondPlace;
			
			// display sections
			$scope.tourneyRound = "groupStage";
			//console.log($scope.tourneyRound);
			
			// testing settings
			//$scope.bracketLeft = false;
			//$scope.tourneyRound = "koStage";
		}
		
		// set initial parameters on knockout stage enter
		function initialKO() {
			$scope.picks = picks;
			$scope.bracketLeft = true;
			$scope.indicator = '>';
		}
		
		//// define $scope functions ////
		// choose which group teams to display
		$scope.selectGroup = function(str) {
			$scope.teams = $scope.nations.getGroup(str);
			//console.log($scope.teams);
			$scope.groupLetter = str;
			
			// update group winners if set
			if (picks[str+1])
				$scope.gfirst = picks[str+1]["name"];
			else
				$scope.gfirst =  firstPlace;
			if (picks[str+2])
				$scope.gsecond = picks[str+2]["name"];
			else
				$scope.gsecond = secondPlace;
		}

		// choose group winners
		$scope.groupWinner = function(obj) {
			//console.log(obj);
			if (!picks[obj.group+1]) {	// if pick 1 not set
				picks[obj.group+1] = {"code": obj.code, "name": obj.name};
				$scope.gfirst = obj.name;
			} else if (obj.code != picks[obj.group+1]["code"] && !picks[obj.group+2]) { // pick 2 is blank and picked team is not pick 1
				picks[obj.group+2] = {"code": obj.code, "name": obj.name};
				$scope.gsecond = obj.name;
			}
			//console.log(picks);
			//console.log(Object.keys(picks).length);
		}

		// remove winners for specified group
		$scope.clearWinners = function(str) {
			//console.log(str);
			$scope.gfirst = firstPlace;
			delete picks[str+1];
			$scope.gsecond = secondPlace;
			delete picks[str+2];
			console.log(picks);
		}
		
		// check to see picks for all groups are complete
		$scope.koStageCheck = function() {
			if (Object.keys(picks).length == "16")
				return true;
			return false;
		}
		
		// button click for KO stage
		$scope.gotoKOStage = function() {
			//$scope.koShow = true;
			//$scope.groupShow = false;
			$scope.tourneyRound = "koStage";
			
			$scope.heading = "Knockout Stage";
			$scope.description = "Please fill out the bracket";
			
			initialKO();	
		}
		
		// switch sides of bracket
		$scope.bracketSwitch = function() {
			$scope.bracketLeft = !$scope.bracketLeft;
			if ($scope.indicator == '>')
				$scope.indicator = '<';
			else 
				$scope.indicator = '>';
		}
		
		initial();
	});














