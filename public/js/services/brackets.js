angular.module('bracketService',[])

	// each function returns a promise object
	.factory('Brackets', function($http) {
		return {

			get : function() {
				return $http.get('/api/brackets');
			},
			
			create : function(bracketData) {
				//console.log(bracketData);
				return $http.post('/api/brackets', bracketData);
			}
		}
	});
