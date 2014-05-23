angular.module("newCtrl", [])

	.filter('reverse', function() {
		return function(items) {
			//console.log(items);
			return items.slice().reverse();
			//return items;
		};
	})

/*
	.filter('getSchedule', function() {
		return function(items, $scope) {
			var length = items.list.length;
			var games = [];
			for (var i = 0;i<length;i++) {
				if (items.list[i].group == $scope.groupLetter)
					games.push(items.list[i]);
			}
			//console.log(length);
			return games;
		};
	})
*/

	.controller("newController", function($scope, $http, Nations, Schedule, Brackets) {
		
		// set initial parameters on page enter
		function initial() {
			// set page title and description per stage
			headingGroup = "Group Stage";
			descriptionGroup = "Please select two nations from each group";
			headingKO = "Knockout Stage";
			descriptionKO = "Please fill out the bracket";
			headingFinals = "2014 World Cup Final";
			descriptionFinals = "Please select a champion and final score";
			
			// load nations and schedule model into $scope
			$scope.nations = Nations;
			$scope.schedule = Schedule;
			$scope.groups = ["<","A", "B", "C", "D", "E", "F", "G", "H",">"];

			// create object for bracket selections
			picks = {};
			$scope.picks = {};
			$scope.picks["ko"] = {};
			$scope.picks["finals"] = {};

			$scope.testObj = {"alpha" : 1,"beta" : 2, "gamma" : 3};
			
			// default to group A onload
			$scope.groupLetter = 'A';
			//$scope.teams = $scope.nations.getGroup('A');
			$scope.teams = filterGroup(Nations, 'A');
			$scope.games = filterGroup(Schedule, 'A');

			// set initial variables on page load
			firstPlace = "First Place";
			secondPlace = "Second Place";
			$scope.gfirst = firstPlace;
			$scope.gsecond = secondPlace;
			
			// set rounds for knockout stage header
			$scope.rounds = ["Sweet Sixteen", "Quarter-Finals", "Semi-Finals", "Finals"];

			groupStageEnter();
						
			// testing settings
			//$scope.bracketLeft = false;
			//$scope.tourneyStage = "koStage";
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

		function filterGroup(obj,letter) {
			var length = obj.list.length;
			var teams = [];
			for (var i = 0;i<length;i++) {
				if (obj.list[i].group == letter)
					//console.log(Nations.list[i].name);
					teams.push(obj.list[i]);
			}
			return teams;
		}
		
		//// define $scope functions ////
		// choose which group teams to display
		$scope.selectGroup = function(str) {
			if (str == ">") {
				if ($scope.groupLetter == "H") // check if it's the last group
					//console.log($scope.groups.indexOf($scope.groupLetter));
					str = "A";
				else {
					//str = $scope.groups[str+1];
					var index = $scope.groups.indexOf($scope.groupLetter)+1;
					str = $scope.groups[index];
				}
				//console.log(str);
			}
			
			if (str == "<") {
				if ($scope.groupLetter == "A") {// check if it's the last group
					//console.log($scope.groups.indexOf($scope.groupLetter));
					str = "H";
				} else {
					//str = $scope.groups[str+1];
					var index = $scope.groups.indexOf($scope.groupLetter)-1;
					str = $scope.groups[index];
				}
			}

			$scope.groupLetter = str;					
			//$scope.teams = $scope.nations.getGroup(str);
			$scope.teams = filterGroup(Nations,str);
			//console.log($scope.teams);
			$scope.games = filterGroup(Schedule,str);

			// update group winners if set
			if (picks[str+1])
				$scope.gfirst = picks[str+1]["name"];
			else
				$scope.gfirst =  firstPlace;
			if (picks[str+2])
				$scope.gsecond = picks[str+2]["name"];
			else
				$scope.gsecond = secondPlace;
				
			// update indicator of group
			//$scope.activeGroup = str;
		}

		$scope.moreInfo = function(data) {
			$scope.showOverlay = true;
			console.log(data);
			$scope.details = data;
		}

		$scope.exitDetails = function() {
			$scope.showOverlay = false;
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
				
				// third place teams
				if ($scope.picks.ko.F1 == $scope.picks.ko.SF1)
					$scope.thirdPlaceA = $scope.picks.ko.SF2;
				else
					$scope.thirdPlaceA = $scope.picks.ko.SF1;
					
				if ($scope.picks.ko.F2 == $scope.picks.ko.SF3)
					$scope.thirdPlaceB = $scope.picks.ko.SF4;
				else
					$scope.thirdPlaceB = $scope.picks.ko.SF3;
				
				// call helper function to remove team in further placement
				if (str1 != str2) 
					clearKO(str1);
										
			} else if ($scope.tourneyStage == "finalsStage") {
				
				//  championship game
				$scope.picks["finals"][str2] = $scope.picks["ko"][str1];
			}
		}

		function clearKO(str) {
			switch (str) {
				case 'A1':
				case 'B2':
				case 'C1':
				case 'D2':
					//if (str != $scope.picks.ko.QF1)
					delete $scope.picks.ko.SF1;
					//if (str != $scope.picks.ko.SF1)
					delete $scope.picks.ko.F1;
					break;
				case 'E1':
				case 'F2':
				case 'G1':
				case 'H2':
					//if (str != $scope.picks.ko.QF1)
						delete $scope.picks.ko.SF2;
					//if (str != $scope.picks.ko.SF1)
						delete $scope.picks.ko.F1;
					break;
				case 'B1':
				case 'A2':
				case 'D1':
				case 'C2':
					//if (str != $scope.picks.ko.QF1)
					delete $scope.picks.ko.SF3;
					//if (str != $scope.picks.ko.SF1)
					delete $scope.picks.ko.F2;
					break;
				case 'F1':
				case 'E2':
				case 'H1':
				case 'G2':
					//if (str != $scope.picks.ko.QF1)
					delete $scope.picks.ko.SF4;
					//if (str != $scope.picks.ko.SF1)
					delete $scope.picks.ko.F2;												
					break;
				case 'QF1':
				case 'QF2':
				case 'QF3':
				case 'QF4':
					delete $scope.picks.ko.F1;
					break;				
				case 'QF5':
				case 'QF6':
				case 'QF7':
				case 'QF8':
					delete $scope.picks.ko.F2;
					break;					
				default :
			}
			
			if (str != $scope.picks.finals.THIRD)
				delete $scope.picks.finals.THIRD;
			if (str != $scope.picks.finals.SECOND)
				delete $scope.picks.finals.SECOND;	
			if (str != $scope.picks.finals.CHAMPS)
				delete $scope.picks.finals.CHAMPS;
				
		}


		// submit the new bracket
		$scope.createBracket = function() {

			if ($scope.picks.finals.CHAMPS == $scope.picks.ko.F2)
				$scope.picks.finals.SECOND = $scope.picks.ko.F1;
			else
				$scope.picks.finals.SECOND = $scope.picks.ko.F2;
			
			//console.log($scope.picks);
			
			$scope.picks.date = getDate();

			// call function to send object to back-end
			Brackets.create($scope.picks)
				.success(function(data) {
					// display some success message to user
					alert("yes");
				})
				.error(function(data) {
					// display some error message to user
					console.log(data);
				});

		}

		function getDate() {
			// get current date
			var nowDate = new Date();			
			var date = [ nowDate.getFullYear(), nowDate.getMonth()+1, nowDate.getDate()];
			
			if (date[1].toString().length == 1) {
				date[1] = "0" + date[1];
				parseInt(date[1]);
			}
			
			return date.join("-");
		}
		
		//console.log(getDate());
		// initialize new bracket
		initial();
	});












