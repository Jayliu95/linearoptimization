
//declare modules
angular.module('linearOptimizationApp', ['linearOptimizationApp.controllers', 'ngRoute'])

//routing config
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/tableauDetail/:ID', {
		controller: 'setupCtrl',
		templateUrl: 'tableauDetail.html'
	})

	.when('/setup',{
		controller: 'setupCtrl',
		templateUrl: 'setup.html'
	})

	.when('/', {
		templateUrl: 'home.html'
	})

	.otherwise({ 
		redirectTo: '/' 
	});
}]);

