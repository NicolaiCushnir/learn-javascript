function process_data(arr) {
	let squared_array = [];
	let sum = 0;

	for(let i = 0; i < arr.length; i++) {
		let squared = arr[i] * arr[i];
		squared_array.push(squared);
		sum += squared;
	}

	return {
		squared_array,
		sum
	};
}

const result = process_data([3, 3, 3]);
console.log("Processed Data", result);
