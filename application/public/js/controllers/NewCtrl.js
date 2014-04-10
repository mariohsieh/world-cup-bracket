angular.module("NewCtrl", [])

	.filter('reverse', function() {
		return function(items) {
			//console.log(items);
			return items.slice().reverse();
			//return items;
		};
	})
	
	.controller("NewController", function($scope, Nations) {
		
		// set initial parameters on page enter
		function initial() {
			// set page title and description per stage
			headingGroup = "Group Stage";
			descriptionGroup = "Please choose two nations from each group";
			headingKO = "Knockout Stage";
			descriptionKO = "Please fill out the bracket";
			headingFinals = "2014 World Cup Final";
			descriptionFinals = "Please choose a champion and final score";
			
			// load nations model into $scope
			$scope.nations = Nations;
			$scope.groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

			// create object for bracket selections
			picks = {};
			
			$scope.picks = {};
			$scope.picks["ko"] = {};
			$scope.picks["finals"] = {};
			
			// default to group A onload
			$scope.teams = $scope.nations.getGroup('A');
			$scope.groupLetter = 'A';

			// set initial variables on page load
			firstPlace = "First Place";
			secondPlace = "Second Place";
			$scope.gfirst = firstPlace;
			$scope.gsecond = secondPlace;
			
			// set rounds for knockout stage header
			$scope.rounds = ["Sweet Sixteen", "Quarter-Finals", "Semi-Finals", "Finals"];
			
			// testing settings
			//$scope.bracketLeft = false;
			//$scope.tourneyStage = "koStage";
			groupStageEnter();
		}

		// set parameters for group stage enter
		function groupStageEnter() {	
			$scope.tourneyStage = "groupStage";
			//$scope.stageNavText = "Next";
			$scope.heading = headingGroup;
			$scope.description = descriptionGroup;

			if ($scope.gfirst == firstPlace)
				$scope.disableToggle = "disabled";
		}

		// set parameters for ko stage enter
		function koStageEnter() {
			$scope.tourneyStage = "koStage";
			$scope.heading = headingKO;
			$scope.description = descriptionKO;
			$scope.bracketLeft = true;
			$scope.indicator = '>';
			//$scope.stageNavText = "Back";
			
			$scope.picks["group"] = picks;			
		}
		
		function finalsEnter() {
			$scope.tourneyStage = "finalsStage";
			$scope.heading = headingFinals;
			$scope.description = descriptionFinals;
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
			//console.log(Object.keys(picks).length);
			//$scope.koStageCheck();
			$scope.disableToggle = "";
		}

		// remove winners for specified group
		$scope.clearWinners = function(str) {
			//console.log(str);
			$scope.gfirst = firstPlace;
			delete picks[str+1];
			$scope.gsecond = secondPlace;
			delete picks[str+2];
			//console.log(picks);
			$scope.disableToggle = "disabled";
		}
		
		// stage navigation check
		$scope.stageNavCheck = function() {
			if ($scope.tourneyStage == "groupStage") {
				if (Object.keys(picks).length == "16") {
					return true;
				}
			}
			if ($scope.tourneyStage == "koStage") {
				if (Object.keys($scope.picks["ko"]).length == "14") {
					return true;
				}
			}
			return false;
		}
		
		// tourney stage navigation
		$scope.stageNav = function(data) {
			if (data == 'Next') {
				if ($scope.tourneyStage == "groupStage") {  // go to KO stage
					koStageEnter();					
				} else if ($scope.tourneyStage == "koStage") {	// go to finals
					finalsEnter();
				}
			}
			else if (data == 'Back'){
				if ($scope.tourneyStage == "koStage") { // back to group stage
					groupStageEnter();	
				} else if ($scope.tourneyStage == "finalsStage") {	// back to KO stage 
					koStageEnter();
				}
			}
			console.log($scope.picks);
			//console.log(Object.keys($scope.picks.group).length);
		}
		
		// switch sides of bracket
		$scope.bracketSwitch = function() {
			$scope.bracketLeft = !$scope.bracketLeft;
/*
			if ($scope.indicator == 'right')
				$scope.indicator = 'left';
			else 
				$scope.indicator = 'right';
*/ 
			if ($scope.indicator == '>')
				$scope.indicator = '<';
			else 
				$scope.indicator = '>'; 
		}
		
		// choose winner for next round
		$scope.selectWinner = function(str1,str2) {
			if ($scope.tourneyStage == "koStage") {
				if (str1.length == "2")	// sweet 16 check
					$scope.picks["ko"][str2] = $scope.picks["group"][str1];
				else // all other rounds in KO stage
					$scope.picks["ko"][str2] = $scope.picks["ko"][str1];
			} else 	// final game
				$scope.picks["finals"][str2] = $scope.picks["ko"][str1];
		}

		initial();
	});












