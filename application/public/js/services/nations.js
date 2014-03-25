angular.module('nationService',[])

	// list of all nations participating
	.factory('Nations', function() {
		var Nations = [
			{
				"_id": 1,
				"code" : "BRA",
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
				"code" : "CRO",
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
				"code" : "MEX",
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
				"code" : "CMR",
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
			}
		];
		return Nations;
	});
