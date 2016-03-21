'use strict'

//declare modules
angular.module('Home', []);
angular.module('Begin' []);

//routing config
.config(['$routeProvider', function($routeProvider){
	.when('/begin',{
		controller: 'beginCtrl',
		templateUrl: 'view/begin.html'
	})

	.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'views/index.html'
	})

	.otherwise({ redirectTo: '/home' });
}])

