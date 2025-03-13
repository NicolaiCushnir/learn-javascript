
// Topic. Closing :
var one = function() {
	var message = "local storage";
	console.log(message);
	var two = function() {
		var message = "deeper scope";
		console.log(message);
		var three = function() {
			var message = "max deeep";
			console.log(message);
		}; three();
	}; two();
}; one();
