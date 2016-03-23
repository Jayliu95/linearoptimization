angular.module('linearOptimizationApp.controllers', [])
.controller('setupCtrl', ['$scope', '$location', function($scope, $location){
	var pageIndex = 0;
	$scope.computeNext = function(){
		pageIndex++;
		var testPath = $location.path();
		console.log("current path is: " + testPath);
		var newPath = "does not exisit";
		$location.path('tableauDetail/:'+pageIndex).replace();
		newPath =$location.path();
		console.log("new path is: " + newPath);
	}
}]);