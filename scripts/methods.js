function string_method(arg) {
	var text = "My name is \"Nicolai Cushnir\".";
	var tl = text.length;
	var tc = text.charAt(0);
	var ts = text.substr(12, 15);
	var tsub = text.substring(12, 18);
	var ti = text.indexOf("name");
	var tli = text.lastIndexOf("ri");
	var tr = text.replace("Nicolai Cushnir", "Nilsson");
	var tspl = text.split(" ");
	var upper = text.toUpperCase();
	var lower = text.toLowerCase();
	var arr = ["Showed all variables:", tl, tc, ts, tsub, ti, tli, tr, tspl, upper, lower];
	
	for (var i = 0; i < arr.length; i++) {
  		console.log(i + " " + arr[i]);
	}
}

function find_indexOf () {
	var name = ["Nicolai", "Radu", "Sergiu", "Ion", "Mihai"];

	// -1 inseamna ca nu exsista elementul
	console.log( name.indexOf("Vasile") );  

	// 2 inseamna cu care element o sa inceapa sa calculeze
	console.log( name.indexOf("Mihai", 2) );

	// primu element incepe cu numarul zero
	console.log( name.indexOf("Nicolai") );

	// cauta doar primu argument.
	console.log( name.indexOf("Semion", "Mihai") ); 
}

function exemplesIndexOf() {

	console.log("\nTotul despre indexOf()");

	function aboutIndexOf() {
		// Ce face metoda indexOf();
		var about = [
			{
				1: "caută și găsește index.",
				2: "Aici este un simplu text."
			}
		];

		console.log(about);
	};

	
	function exemple1() {
		var beasts = ["ant", "bison", "bee", "camel", "duck", "bison", "snake"];
		console.log(beasts.indexOf("bison"));
	}
		
	return exemple1();
	
	function exemple2 () {
		var arr = [2, 9, 9];
		var a = arr.indexOf(2) // 0
		var b = arr.indexOf(7) // -1
		var c = arr.indexOf(9, 2) //  ? 2 ?
		var d = arr.indexOf(2, -1) // ? -1 ?
		var e = arr.indexOf(2, -3) // 0 ?
		console.log(a);
	}

	function exemple3 () {
		var name = ["Igor", "Nicolai", "Oleg", "Vova", "Alex", "Ion", "Ati"];
		var box1 = name.indexOf("Igor"); // 0
		var box2 = name.indexOf("Valeara"); // -1 
		var box3 = name.indexOf("Igor", "Ati"); // 0 ?
		var box4 = name.indexOf("Ati", "Igor"); // 6 ?
		console.log(box4);
	}

	function exemple4 () {
		var indices = [];
		var array = ["a", "b", "a", "c", "a", "d"];
		var element = "a";
		var idx = array.indexOf(element);
		while(idx != -1) {
			indices.push(idx);
			idx = array.indexOf(element, idx + 1);
		}
		console.log(indices);
	}

	function exemple5 () {
		console.log("Ok");
	}
	
}

exemplesIndexOf();