var promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Done."), 1000;
	});
});

promise.then(
	function(result){
		console.log(result);
	}
);