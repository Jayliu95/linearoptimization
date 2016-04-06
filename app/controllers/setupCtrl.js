angular.module('linearOptimizationApp.controllers', [])
.controller('setupCtrl', ['$scope', '$location', function($scope, $location){
	$scope.numDecisionVars = 5;
	$scope.numConstrainVars = 5;
	$scope.dropDownChoices = ['<', '=', '>'];
	
	$scope.makeArrOfObjects = function(count, stringUsed){
		//count = number of elements in array
		//stringUsed = the string as each element in array
		var retArr = [];
		for(var i = 0; i < count; i++){
			var tempObject = {"key": i, "value": stringUsed};
			retArr.push(tempObject);
		}
		return retArr;
	}
	$scope.dropDownSelectedArr = $scope.makeArrOfObjects($scope.numConstrainVars, "Select");

	$scope.range = function(min,max){
		var input = [];
		for(var i = min; i <= max; i++){
			input.push(i);
		}
		return input;
	}
	$scope.getValues = function(){
		numDecisionVars = $scope.numDecVars;
		numConstrainVars = $scope.numCons;
	}
	$scope.getDropDownSelectedItem = function(count, item){
		//item is  a string
		var tempObject = {"key": count, "value": item};
		$scope.dropDownSelectedArr[count] = tempObject;
	}
	$scope.consolePrint2DArray = function(){
		var currLine;
		for(var i = 0 ; i < $scope.A.length; i++){
			currLine ="";
			for (var j = 0; j < $scope.A[0].length; j++){
				currLine += $scope.A[i][j];
			}
			console.log(currLine);
		}
	}
	//console.log("Doing some testing" + $scope.A[0][0]);
}]);