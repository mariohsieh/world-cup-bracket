angular.module('scheduleService',[])

	.factory('Schedule', function() {
		var Schedule = {};
		
		Schedule.list = [
			{
				"match" : 01,
				"date" : "2014-06-12",
				"team1" : "bra",
				"team2" : "cro",
				"city" : "Sao Paulo",
				"group" : "A"
			},
			{
				"match" : 02,
				"date" : "2014-06-13",
				"team1" : "mex",
				"team2" : "cmr",
				"city" : "Natal",
				"group" : "A"
			},
			{
				"match" : 03,
				"date" : "2014-06-13",
				"team1" : "esp",
				"team2" : "ned",
				"city" : "Salvador",
				"group" : "B"
			},			
			{
				"match" : 04,
				"date" : "2014-06-13",
				"team1" : "chi",
				"team2" : "aus",
				"city" : "Cuiaba",
				"group" : "B"
			},
			{
				"match" : 05,
				"date" : "2014-06-14",
				"team1" : "col",
				"team2" : "gre",
				"city" : "Belo Horizonte",
				"group" : "C"
			},
			{
				"match" : 06,
				"date" : "2014-06-14",
				"team1" : "civ",
				"team2" : "jpn",
				"city" : "Recife",
				"group" : "C"
			},
			{
				"match" : 07,
				"date" : "2014-06-14",
				"team1" : "uru",
				"team2" : "crc",
				"city" : "Fortaleza",
				"group" : "D"
			},
			{
				"match" : 08,
				"date" : "2014-06-14",
				"team1" : "eng",
				"team2" : "ita",
				"city" : "Manaus",
				"group" : "D"
			},
			{
				"match" : 09,
				"date" : "2014-06-15",
				"team1" : "sui",
				"team2" : "ecu",
				"city" : "Brasilia",
				"group" : "E"
			},
			{
				"match" : 10,
				"date" : "2014-06-15",
				"team1" : "fra",
				"team2" : "hon",
				"city" : "Porto Alegre",
				"group" : "E"
			},
			{
				"match" : 11,
				"date" : "2014-06-15",
				"team1" : "arg",
				"team2" : "bih",
				"city" : "Rio de Janeiro",
				"group" : "F"
			},
			{
				"match" : 12,
				"date" : "2014-06-16",
				"team1" : "irn",
				"team2" : "nga",
				"city" : "Curitiba",
				"group" : "F"
			},
			{
				"match" : 13,
				"date" : "2014-06-16",
				"team1" : "ger",
				"team2" : "por",
				"city" : "Salvador",
				"group" : "G"
			},
			{
				"match" : 14,
				"date" : "2014-06-16",
				"team1" : "gha",
				"team2" : "usa",
				"city" : "Natal",
				"group" : "G"
			},
			{
				"match" : 15,
				"date" : "2014-06-17",
				"team1" : "bel",
				"team2" : "alg",
				"city" : "Belo Horizonte",
				"group" : "H"
			},			
			{
				"match" : 16,
				"date" : "2014-06-17",
				"team1" : "rus",
				"team2" : "kor",
				"city" : "Cuiaba",
				"group" : "H"
			},														
			{
				"match" : 17,
				"date" : "2014-06-17",
				"team1" : "bra",
				"team2" : "mex",
				"city" : "Fortaleza",
				"group" : "A"
			},
			{
				"match" : 18,
				"date" : "2014-06-18",
				"team1" : "cmr",
				"team2" : "cro",
				"city" : "Manaus",
				"group" : "A"
			},						
			{
				"match" : 19,
				"date" : "2014-06-18",
				"team1" : "esp",
				"team2" : "chi",
				"city" : "Rio de Janeiro",
				"group" : "B"
			},
			{
				"match" : 20,
				"date" : "2014-06-18",
				"team1" : "aus",
				"team2" : "ned",
				"city" : "Porto Alegre",
				"group" : "B"
			},						
			{
				"match" : 21,
				"date" : "2014-06-19",
				"team1" : "col",
				"team2" : "civ",
				"city" : "Brasilia",
				"group" : "C"
			},
			{
				"match" : 22,
				"date" : "2014-06-19",
				"team1" : "jpn",
				"team2" : "gre",
				"city" : "Natal",
				"group" : "C"
			},						
			{
				"match" : 23,
				"date" : "2014-06-19",
				"team1" : "uru",
				"team2" : "eng",
				"city" : "Sao Paolo",
				"group" : "D"
			},
			{
				"match" : 24,
				"date" : "2014-06-20",
				"team1" : "ita",
				"team2" : "crc",
				"city" : "Recife",
				"group" : "D"
			},						
			{
				"match" : 25,
				"date" : "2014-06-20",
				"team1" : "sui",
				"team2" : "fra",
				"city" : "Salvador",
				"group" : "E"
			},
			{
				"match" : 26,
				"date" : "2014-06-15",
				"team1" : "hon",
				"team2" : "ecu",
				"city" : "Curitiba",
				"group" : "E"
			},
			{
				"match" : 27,
				"date" : "2014-06-21",
				"team1" : "arg",
				"team2" : "irn",
				"city" : "Belo Hrizonte",
				"group" : "F"
			},
			{
				"match" : 28,
				"date" : "2014-06-21",
				"team1" : "nga",
				"team2" : "bin",
				"city" : "Curitiba",
				"group" : "F"
			},
			{
				"match" : 29,
				"date" : "2014-06-21",
				"team1" : "ger",
				"team2" : "gha",
				"city" : "Fortaleza",
				"group" : "G"
			},
			{
				"match" : 30,
				"date" : "2014-06-22",
				"team1" : "usa",
				"team2" : "por",
				"city" : "Manaus",
				"group" : "G"
			},
			{
				"match" : 31,
				"date" : "2014-06-22",
				"team1" : "bel",
				"team2" : "rus",
				"city" : "Rio de Janeiro",
				"group" : "H"
			},			
			{
				"match" : 32,
				"date" : "2014-06-22",
				"team1" : "kor",
				"team2" : "alg",
				"city" : "Porto Alegre",
				"group" : "H"
			},														
			{
				"match" : 33,
				"date" : "2014-06-23",
				"team1" : "cmr",
				"team2" : "bra",
				"city" : "Brasilia",
				"group" : "A"
			},
			{
				"match" : 34,
				"date" : "2014-06-23",
				"team1" : "crc",
				"team2" : "mex",
				"city" : "Recife",
				"group" : "A"
			},						
			{
				"match" : 35,
				"date" : "2014-06-23",
				"team1" : "aus",
				"team2" : "esp",
				"city" : "Curitiba",
				"group" : "B"
			},
			{
				"match" : 36,
				"date" : "2014-06-23",
				"team1" : "ned",
				"team2" : "chi",
				"city" : "Sao Paulo",
				"group" : "B"
			},						
			{
				"match" : 37,
				"date" : "2014-06-24",
				"team1" : "jpn",
				"team2" : "col",
				"city" : "Cuiaba",
				"group" : "C"
			},
			{
				"match" : 38,
				"date" : "2014-06-24",
				"team1" : "gre",
				"team2" : "civ",
				"city" : "Fortaleza",
				"group" : "C"
			},						
			{
				"match" : 39,
				"date" : "2014-06-24",
				"team1" : "ita",
				"team2" : "uru",
				"city" : "Natal",
				"group" : "D"
			},
			{
				"match" : 40,
				"date" : "2014-06-24",
				"team1" : "crc",
				"team2" : "eng",
				"city" : "Belo Horizonte",
				"group" : "D"
			},						
			{
				"match" : 41,
				"date" : "2014-06-25",
				"team1" : "hon",
				"team2" : "sui",
				"city" : "Manaus",
				"group" : "E"
			},
			{
				"match" : 42,
				"date" : "2014-06-25",
				"team1" : "ecu",
				"team2" : "fra",
				"city" : "Rio de Janeiro",
				"group" : "E"
			},
			{
				"match" : 43,
				"date" : "2014-06-25",
				"team1" : "nga",
				"team2" : "arg",
				"city" : "Porto Alegre",
				"group" : "F"
			},
			{
				"match" : 44,
				"date" : "2014-06-25",
				"team1" : "bin",
				"team2" : "irn",
				"city" : "Salvador",
				"group" : "F"
			},	
			{
				"match" : 45,
				"date" : "2014-06-26",
				"team1" : "usa",
				"team2" : "ger",
				"city" : "Recife",
				"group" : "G"
			},
			{
				"match" : 46,
				"date" : "2014-06-26",
				"team1" : "por",
				"team2" : "gha",
				"city" : "Brasilia",
				"group" : "G"
			},
			{
				"match" : 47,
				"date" : "2014-06-26",
				"team1" : "kor",
				"team2" : "bel",
				"city" : "Sao Paulo",
				"group" : "H"
			},
			{
				"match" : 48,
				"date" : "2014-06-26",
				"team1" : "ag",
				"team2" : "rus",
				"city" : "Curitiba",
				"group" : "H"
			}																												
		];
				
		return Schedule;
	}
