// Be like main function, be happy. :)

function users() {
	var user = [
		{
			"id": 1,
			"name": "Emty User",
			"gender": "none",
			"age": "none"
		},
		{
			"id": 3, 
			"name": "Giulia Beteagud",
			"gender": "female",
			"age": 36,
		},
		{
			"id": 2,
			"name": "Nicolai Cushnir",
			"gender": "male",
			"age": 31
		},
		{
			"id": 3, 
			"name": "Sofia Rotaru",
			"gender": "female",
			"age": 22
		},
		{
			"id": 4, 
			"name": "Alina Spataru",
			"gender": "female",
			"age": 19
		}
	];
	var result = "";		
		for(var i = 0; i < user.length; i++) {
			if(user[i].name) {
				result += i + " " + user[i].name + "\n";
		}
	}

	return result;
}

// sad, happy, borest, afraid etc ...
// Want like user to be with random disposition
// Static ...
function user_mood() {
	var result = "";
	var mood = ["plictisit", "trist", "bucuros", "speriat", "uimit"];
	var transform = Math.floor(Math.random() * 5);
	for(var j = 0; j < mood.length; j++) {
		if(transform === j) {
			return mood[j]; 
		}
	}

	return result;
}

function give_random_disposition() {
	var result = Math.floor( Math.random() * 10);
	return result;
}

// event, disposition
function main() {
	return users();
}

console.log(main());