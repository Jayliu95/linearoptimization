function coordinate(x,y){
	this.x = x;
	this.y = y;
	this.toString = function(){
		return ("x value is: " + x +" y value is: " + y);
	}
}


/*
 *	These are the test values;
 */
var list1 = [1/8, 15/8, 0, 161/4];	//resulting row
var list2 = [1, 7, -8, 2];	//pivotal row
var matrixA = [[-1, 1, 1, 0, 0, 11],
				[1, 1, 0, 1, 0, 27],
				[2, 5, 0, 0, 1, 90],
				[-6, -4, 0, 0, 0, 0]];

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
	if(typeof(matrixA) === 'undefined'){
		return("Error: reading in matrixA");
	}else if(matrixA.length < 1){
		return("Error: length of row is less than 1");
	}else if(matrixA[matrixA.length-1].length < 1){
		return("Error: length of column matrix");
	}

	var indexOfPivot = findMaxNegative(matrixA[matrixA.length-1]);	//could be either the object row or the resource column (dual primal method)
	var coordinateOfPivot = new coordinate(indexOfPivot, findIndexWithMinDataRatio(matrixA, indexOfPivot));
	return coordinateOfPivot;	
}

// Note: computes in simplex form 
var findIndexWithMinDataRatio = function(matrixA, yCoord){
	var currentMinDataRatio;
	var smallestDataRatio = Number.MAX_SAFE_INTEGER;	//set to largest
	var indexOfMinDataRatio = 0;
	//compute valid data ratios

	if(matrixA.length === 'undefined'){
		return ("Error: undefined");
	}

	for (var i = 0; i < matrixA.length-1; i++){
		if(matrixA[i][yCoord] > 0){
			currentMinDataRatio = matrixA[i][matrixA[0].length-1] / matrixA[i][yCoord];
			console.log("Data ratio: " + matrixA[i][matrixA[0].length-1] + " / " + matrixA[i][yCoord] + " = " + currentMinDataRatio);
			if(currentMinDataRatio < smallestDataRatio){
				console.log(currentMinDataRatio + " is less than " + smallestDataRatio);
				smallestDataRatio = currentMinDataRatio;
				indexOfMinDataRatio = i;
			}
		}
	}

	if(smallestDataRatio != Number.MAX_SAFE_INTEGER){
		console.log("The returned y index is: "+ indexOfMinDataRatio);
		return indexOfMinDataRatio;
	}else{
		console.log("unbounded");
		return "Unbounded";
		}
}

var findMaxNegative = function(vector){
	if(vector.length < 1){
		console.log("Error: Length of vector is not greater than zero!");
	}

	var indexForMostNegative = 0;
	for(var i = 1; i<vector.length; i++){
		if(vector[i] < 0){
			if(vector[indexForMostNegative] > vector[i]){
				indexForMostNegative = i;
			}	
		}
	}
	if(vector[indexForMostNegative] >= 0){
		console.log("Already feasibly");
	}
	console.log("Testing max negative: " + vector[indexForMostNegative]);
	return indexForMostNegative;
}

var printResultingRow = function(result){
	var resultStr = "";
	for (var i = 0; i < result.length; i++){
		resultStr += result[i] +  " ";
	}

	console.log(resultStr);
}


var pirintMatrix = function(matrixA){
	var rowString = "";
	if(matrixA[0].length === 'undefined'){
		return ("Error: undefined");
	}
	for(var i = 0; i < matrixA.length; i++){
		rowString = "";
		for (var j = 0; j < matrixA[0].length; j++){
			rowString += matrixA[i][j] +" ";
		}
		console.log(rowString);
	}
}

//var result = computeResultingRow(list1, list2, '-', 1/8);
//printResultingRow(result);
var test = function(list1, list2, matrixA){
	pirintMatrix(matrixA);
	console.log("Testing pivotal point");
	
	var pivotReturn = findPivotPoint(matrixA);
	if(typeof(pivotReturn) === "string"){
		console.log(pivotReturn);
	}else{
		console.log("The pivot is: " + pivotReturn.toString());
	}
}

test(list1, list2, matrixA);

