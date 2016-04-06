
//declare modules
angular.module('linearOptimizationApp', ['linearOptimizationApp.controllers', 'ui.router', 'ui.bootstrap'])

//routing config
.config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider){
	$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		})

		//form: getData
		.state('form', {
			url: '/form',
			templateUrl: 'form.html',
			controller: 'setupCtrl'
		})

		//nested states
		.state('form.setup', {
			url: '/setup',
			templateUrl: 'setup.html'
		})

		.state('form.getValues', {
			url: '/getValues',
			templateUrl: 'getValues.html'
		});

	$urlRouterProvider.otherwise('/');

	
}]);

