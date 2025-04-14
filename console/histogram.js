/* 
** 46 exercises from python
** number 12 :
*/ 

let arr = [4, 9, 7];
let char = "*";
let result = "";
function histogram () {
	for(var i = 0; i < arr.length; i++) {
		result += arr[i] * char + " " + "\n";
	}
	
	return result;
}

console.log( histogram() );
