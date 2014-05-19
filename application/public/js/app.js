// list all the modules for dependency injection
angular.module("worldcupApp", [
	"ngRoute",
	"appRoutes",
	"homeCtrl",
	"allCtrl",
	"newCtrl",
	//"singleCtrl",
	"nationService",
	"scheduleService",
	"bracketService"
]);

