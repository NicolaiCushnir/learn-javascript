
// vowel or consonant :
var vowel = "aeouiAEOUI";
var result = "";
var is_constant = true;
function vowel_or_consonant(arg) {
	for(var i = 0; i < vowel.length; i++) {
		if(arg === vowel[i]) {
			is_constant = false;
		}
	}

	if(is_constant) {
		console.log("constant");
	} else {
		console.log("Vowel");
	}
}

vowel_or_consonant("u");
