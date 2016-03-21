
//declare modules
angular.module('linearOptimizationApp', ['ngRoute'])

//routing config
.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/begin',{
		controller: 'beginCtrl',
		templateUrl: 'begin.html'
	})

	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'home.html'
	})

	.otherwise({ 
		redirectTo: '/' 
	});
}]);

