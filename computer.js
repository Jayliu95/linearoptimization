var coordinates = {
	row
}


var list1 = [1/8, 15/8, 0, 161/4];	//resulting row
var list2 = [1, 7, -8, 2];	//pivotal row
var computeResultingRow = function(list1, list2, operation, inverse){
	var result = [];
	for(var i = 0 ; i < list1.length; i++){
		switch(operation){
			case '+': 
				result[i] = list1[i] + (inverse * list2[i]);
				break;

			case '-': 
				result[i] = list1[i] - (inverse * list2[i]);  
				break;

			default : 
				console.log("Please input the correct operation!");
				break;
		}
	}
	return result;
}

/*
 * 	Input:
 */


var findPivotPoint = function(matrixA){
	var indexOfPivot = findMaxNegative(matrixA[matrixA.length-1]);	//could be either the object row or the resource column (dual primal method)
	var coordinateOfPivot = findIndexWithMinDataRatio(indexOfPivot);
}

var findMaxNegative = function(vector){
	if(vector.length < 1){
		console.log("Error: Length of vector is not greater than zero!");
	}

	var indexForMostNegative = 0;
	for(var i = 1; i<vector.length; i++){
		if(vector[indexForMostNegative] < vector[i]){
			indexForMostNegative = i;
		}
	}

	return indexForMostNegative;
}

var printResultingRow = function(result){
	var resultStr = "";
	for (var i = 0; i < result.length; i++){
		resultStr += result[i] +  " ";
	}

	console.log(resultStr);
}


var result = computeResultingRow(list1, list2, '-', 1/8);
printResultingRow(result);


