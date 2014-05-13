// list all the modules for dependency injection
angular.module("worldcupApp", [
	"ngRoute",
	"appRoutes",
	"HomeCtrl",
	"AllCtrl",
	"NewCtrl",
	//"SingleCtrl",
	"nationService",
	"scheduleService",
	"bracketService"
]);

