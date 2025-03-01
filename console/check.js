
let arr = [0, 2, 3, 1, -2];
let sum = 0;

for(var i = 0; i < arr.length; i++) {
	if(arr[i] > 0) {
		sum += arr[i];
	}

	console.log( sum );
}