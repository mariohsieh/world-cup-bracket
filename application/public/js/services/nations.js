angular.module('nationService',[])

	// list of all nations participating
	.factory('Nations', function() {
		var Nations = {};
		
		// list all nations and info
		Nations.list = [
			{
				"_id": 1,
				"code" : "bra",
				"name" : "Brazil",
				"nickname" : "A Seleção (The Selection)",
				"ranking" : 9,
				"history" : {
					"wc2010" : "6th Place",
					"wc2006" : "5th Place",
					"wc2002" : "Champions",
					"best" : "Champions (1958, 1962, 1970, 1994, 2002)"
				},
				"group" : "A"
			},
			{
				"_id": 2,
				"code" : "cro",
				"name" : "Croatia",
				"nickname" : "Vatreni (The Blazers)",
				"ranking" : 16,
				"history" : {
					"wc2010" : "Did not qualify",
					"wc2006" : "Group Stage",
					"wc2002" : "Group Stage",
					"best" : "3rd Place (1998)"
					},
				"group" : "A"
			},
			{
				"_id": 3,
				"code" : "mex",
				"name" : "Mexico",
				"nickname" : "El Tricolor",
				"ranking" : 20,
				"history" : {
					"wc2010" : "14th Place",
					"wc2006" : "15th Place",
					"wc2002" : "11th Place",
					"best" : "6th Place (1970, 1986)"
				}, 
				"group" : "A"
			},
			{
				"_id": 4,
				"code" : "cmr",
				"name" : "Cameroon",
				"nickname" : "Les Lions Indomptables (The Indomitable Lions)",
				"ranking" : 59,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Group Stage",
					"best" : "8th Place (1990)"
				},
				"group" : "A"
			},
			{
				"_id": 5,
				"code" : "esp",
				"name" : "Spain",
				"nickname" : "La Furia Roja (The Red Fury)",
				"ranking" : 1,
				"history" : {
					"wc2010" : "Champions",
					"wc2006" : "9th Place",
					"wc2002" : "5th place",
					"best" : "Champions (2010)"
				},
				"group" : "B"
			},
			{
				"_id": 6,
				"code" : "ned",
				"name" : "Netherlands",
				"nickname" : "Oranje",
				"ranking" : 10,
				"history" : {
					"wc2010" : "2nd Place",
					"wc2006" : "11th Place",
					"wc2002" : "Did Not Qualify",
					"best" : "2nd Place (1974, 1978, 2010)"
				},
				"group" : "B"
			},
			{
				"_id": 7,
				"code" : "chi",
				"name" : "Chile",
				"nickname" : "La Roja (The Red One)",
				"ranking" : 15,
				"history" : {
					"wc2010" : "10th Place",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "3rd Place (1962)"
				},
				"group" : "B"
			},
			{
				"_id": 8,
				"code" : "aus",
				"name" : "Australia",
				"nickname" : "SOCCEROOS",
				"ranking" : 53,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage"
				},
				"group" : "B"
			},
			{
				"_id": 9,
				"code" : "col",
				"name" : "Colombia",
				"nickname" : "Los Cafeteros (The Coffee Growers)",
				"ranking" : 5,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "14th Place (1962 1990)"
					},
				"group" : "C"
			},
			{
				"_id": 10,
				"code" : "gre",
				"name" : "Greece",
				"nickname" : "Το Πειρατικό (To Piratiko)",
				"ranking" : 12,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage"
				},
				"group" : "C"
			},
			{
				"_id": 11,
				"code" : "civ",
				"name" : "Ivory Coast",
				"nickname" : "Les Éléphants (The Elephants)",
				"ranking" : 17,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Group Stage",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage (2006, 2010)"
				},
				"group" : "C"
			},
			{
				"_id": 12,
				"code" : "jpn",
				"name" : "Japan",
				"nickname" : "サムライ・ブルー (Samurai Blue)",
				"ranking" : 50,
				"history" : {
					"wc2010" : "9th Place",
					"wc2006" : "Group Stage",
					"wc2002" : "9th Place",
					"best" : "9th Place (2002, 2010)"
				},
				"group" : "C"
			},
			{
				"_id": 13,
				"code" : "uru",
				"name" : "Uruguay",
				"nickname" : "La Celeste (The Sky Blue [One])",
				"ranking" : 7,
				"history" : {
					"wc2010" : "4th Place",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Group Stage",
					"best" : "Champions (1930, 1950)"
					},
				"group" : "D"
			},
			{
				"_id": 14,
				"code" : "crc",
				"name" : "Costa Rica",
				"nickname" : "Los Ticos",
				"ranking" : 35,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Group Stage",
					"wc2002" : "Group Stage",
					"best" : "13th Place (1990)"
				},
				"group" : "D"
			},
			{
				"_id": 15,
				"code" : "eng",
				"name" : "England",
				"nickname" : "The Three Lions",
				"ranking" : 15,
				"history" : {
					"wc2010" : "13th Place",
					"wc2006" : "7th Place",
					"wc2002" : "6th Place",
					"best" : "Champions (1966)"
				},
				"group" : "D"
			},
			{
				"_id": 16,
				"code" : "ita",
				"name" : "Italy",
				"nickname" : "Azzurri (The Blues)",
				"ranking" : 8,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Champions",
					"wc2002" : "15th Place",
					"best" : "Champions (1934, 1938, 1982, 2006)"
				},
				"group" : "D"
			},
			{ 
				"_id": 17,
				"code" : "sui",
				"name" : "Switzerland",
				"nickname" : "Schweizer Nati, La Nati, Squadra Nazionale",
				"ranking" : 6,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "10th Place",
					"wc2002" : "Did Not Qualify",
					"best" : "8th Place (1954)"
				}, 
				"group" : "E"
			},
			{ 
				"_id": 18,
				"code" : "ecu",
				"name" : "Ecuador",
				"nickname" : "La Tri (Tri-color)",
				"ranking" : 24,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "12th Place",
					"wc2002" : "Group Stage",
					"best" : "12th Place (2006)"
				}, 
				"group" : "E"
			},
			{ 
				"_id": 19,
				"code" : "fra",
				"name" : "France",
				"nickname" : "Les Bleus (The Blues)",
				"ranking" : 19,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "2nd Place",
					"wc2002" : "Group Stage",
					"best" : "Champions (1998)"
				}, 
				"group" : "E"
			},
			{
				"_id": 20,
				"code" : "hon",
				"name" : "Honduras",
				"nickname" : "Los Catrachos",
				"ranking" : 40,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage (1982, 2010)"
				}, 
				"group" : "E"
			},
			{
				"_id": 21,
				"code" : "arg",
				"name" : "Argentina",
				"nickname" : "La Albiceleste (The White and Sky Blue)",
				"ranking" : 3,
				"history" : {
					"wc2010" : "5th Place",
					"wc2006" : "6th Place",
					"wc2002" : "Group Stage",
					"best" : "Champions (1978, 1986)"
				}, 
				"group" : "F"
			},
			{ 
				"_id": 22,
				"code" : "bih",
				"name" : "Bosnia and Herzegovina",
				"nickname" : "Zmajevi (Dragons)",
				"ranking" : 17,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "Did Not Qualify"
				}, 
				"group" : "F"
			},
			{
				"_id": 23,
				"code" : "irn",
				"name" : "Iran",
				"nickname" : "شیران ایران (Shirane Iran - The Iranian Lions)",
				"ranking" : 38,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Group Stage",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage"
				}, 
				"group" : "F"
			},
			{ 
				"_id": 24,
				"code" : "nga",
				"name" : "Nigeria",
				"nickname" : "Super Eagles",
				"ranking" : 41,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Group Stage",
					"best" : "Round of 16"
				}, 
				"group" : "F"
			},
			{ 
				"_id": 25,
				"code" : "ger",
				"name" : "Germany",
				"nickname" : "Nationalelf (The Team)",
				"ranking" : 2,
				"history" : {
					"wc2010" : "3rd Place",
					"wc2006" : "3rd Place",
					"wc2002" : "2nd Place",
					"best" : "Champions (1954, 1974, 1990)"
				}, 
				"group" : "G"
			},
			{ 
				"_id": 26,
				"code" : "por",
				"name" : "Portugal",
				"nickname" : "Selecção das Quinas (National Team of the Shields)",
				"ranking" : 4,
				"history" : {
					"wc2010" : "11th Place",
					"wc2006" : "4th Place",
					"wc2002" : "Group Stage",
					"best" : "3rd Place (1966)"
				}, 
				"group" : "G"
			},
			{ 
				"_id": 27,
				"code" : "gha",
				"name" : "Ghana",
				"nickname" : "Black Stars",
				"ranking" : 37,
				"history" : {
					"wc2010" : "7th Place",
					"wc2006" : "13th Place",
					"wc2002" : "Did Not Qualify",
					"best" : "7th Place (2010)"
				}, 
				"group" : "G"
			},
			{ 
				"_id": 28,
				"code" : "usa",
				"name" : "United States",
				"nickname" : "The Stars and Stripes",
				"ranking" : 13,
				"history" : {
					"wc2010" : "12th Place",
					"wc2006" : "Group Stage",
					"wc2002" : "8th Place",
					"best" : "3rd Place (1930)"
				}, 
				"group" : "G"
			},
			{ 
				"_id": 29,
				"code" : "bel",
				"name" : "Belgium",
				"nickname" : "Rote Teufel (Red Devils)",
				"ranking" : 11,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "14th Place",
					"best" : "4th Place (1986)"
				}, 
				"group" : "H"
			},
			{ 
				"_id": 30,
				"code" : "alg",
				"name" : "Algeria",
				"nickname" : "الأفناك (Fennec Foxes)",
				"ranking" : 26,
				"history" : {
					"wc2010" : "Group Stage",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Did Not Qualify",
					"best" : "Group Stage"
				}, 
				"group" : "H"
			},
			{ 
				"_id": 31,
				"code" : "rus",
				"name" : "Russia",
				"nickname" : "Sbornaya (The National Team)",
				"ranking" : 22,
				"history" : {
					"wc2010" : "Did Not Qualify",
					"wc2006" : "Did Not Qualify",
					"wc2002" : "Group Stage",
					"best" : "Group Stage"
				}, 
				"group" : "H"
			},
			{ 
				"_id": 32,
				"code" : "kor",
				"name" : "South Korea",
				"nickname" : "태극전사 (Taegeuk Warriors)",
				"ranking" : 53,
				"history" : {
					"wc2010" : "15th Place",
					"wc2006" : "Group Stage",
					"wc2002" : "4th Place",
					"best" : "4th Place (2002)"
				}, 
				"group" : "H"
			}
		];
		
		// select group
		Nations.getGroup = function(data) {
			var length = Nations.list.length;
			var teams = [];
			for (var i = 0;i<length;i++) {
				if (Nations.list[i].group == data)
					//console.log(Nations.list[i].name);
					teams.push(Nations.list[i]);
			}
			return teams;
		}

		return Nations;
	});
