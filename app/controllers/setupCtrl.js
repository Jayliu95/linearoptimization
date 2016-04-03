angular.module('linearOptimizationApp.controllers', [])
.controller('setupCtrl', ['$scope', '$location', function($scope, $location){
	$scope.numDecisionVars = 10;
	$scope.numConstrainVars = 10;
	$scope.range = function(min,max){
		var input = [];
		for(var i = min; i <= max; i++){
			input.push(i);
		}
		console.log("Input is" +input);
		return input;
	}

	$scope.getValues = function(){
		numDecisionVars = $scope.numDecVars;
		numConstrainVars = $scope.numCons;
		console.log("numDecisionVars: " + numDecisionVars +" numConstrainVars: " + numConstrainVars);
	}
}]);