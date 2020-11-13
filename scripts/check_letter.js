function letter_method_index_of() {
	var vowel = "aeouiAEOUI";
	var checkConsonant = true;
	for(var each of vowel) {
		if(vowel[each].indexOf() !== -1) {
			// ?
		}
	}
}

function letter_method_include(letter) {
    var vowel = "aeiou";
    var consonant = "bcdfghjklmnprqstvwxyz";
    if(vowel.includes(letter) ) {
        console.log("the letter " + letter + " is a vowel.");
    }
    if(consonant.includes(letter)) {
        console.log("the letter " + letter + " is a consonant.");
    }
    // must more work here
    if (!vowel.includes(letter) && !consonant.includes(letter)) {
        console.log(`"${letter}" is not a letter!`);
    }
}

function check_letter_method_while_loop(sentence) {
  var vowel = "aeouiAEOUI";
  var i = 0;
  var j = 0;

  while(i < sentence.length) {
    i++;
    while(sentence[i] === vowel[j]) {
      console.log(sentence[i]);
      j++;
    }
  }
}

function letter_method_algorithm(letter) {
  function ask() {
    var symbol = {
      0 : "?",
      1 : "!",
      2 : "@",
      3 : "#",
      4 : "$",
      5 : "%",
      6 : "^",
      7 : "&",
      8 : "*",
      9 : "(",
      10 : ")",
      11 : "()",
      12 : "-",
      13 : "+",
      14 : "|",
      15 : "/",
      16 : ":",
      17 : "`",
      18 : "[",
      19 : "]",
      20 : "[]",
      21 : "{",
      22 : "}",
      23 : "{}",
      24 : "=",
    };
    var vowel = "aeouiAEOUI";
    let isConsonant = true;
    for(var k in symbol) {
      if(symbol[k] === arg) {
        isTrue = false;
      }
    }
    // finish the task more late
    for (var i = 0; i < vowel.length; i++) {
      if (letter === vowel[i]) {
        isConsonant = false;
      }
    }
    if (isConsonant) {
      console.log("consonant");
    } else {
      console.log("vowel");
    }
  }
  if(letter === "" || letter === " ") {
    console.log("Error : Emty field. Write a letter. ");
  } else if (typeof letter === 'undefined') {
    console.log("undef : myabe even must \'ловить ошибку\' , trebuie de gandit");
  } else if (!isNaN(letter)) {
    console.log("Error : Here is a number. Write a letter. ");
  } else if (letter.length === 2 && !isNaN(letter[0])) {
    console.log("Error : First element is a number. Write a letter.");
  } else if (letter.length >= 2) {
    console.log("Error. You must write only a letter. ");
  } else {
    console.log(ask());
  } 
}

function letter_method_algorithm_2(symbol) {
  var vowel = "aeouiAEOUI";
  let check = true;
  if(symbol === undefined || symbol === "") {
    console.log("Error : Empty field. Write a letter.");
  } else if (Number(symbol)) {
      console.log("Error : Write a letter not a number.");
  } else if (symbol.length > 1) {
    console.log("Error : Write a letter not a sentence.");
  }
  for(var each = 0; each < vowel.length; each++) {
    if(symbol === vowel[each]) {
      check = false;
    }
  }
  if(check) {
    console.log("consonant");
  } else {
    console.log("vowel");
  }
}

// method regexp
function letter_method_RegExp(){
  const letter = arg => console.log(
    /[aeiou]/i.test(arg) ? 'vowel' : 'consonant'
  );
  return letter();
}

function check_letter_method_callback(arg) {
  var vowel = "aeouiAEOUI";
  var result = "";
  for (var i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      return "vowel";
    }
  }
  return "consonant";
}

function check_letter_method_weird(arg) {
    var vowel = "aeiou";
    var consonant = "bcdfghjklmnprqstvwxyz";
    
    if(!isNaN(arg)) {
      console.log("Here is number. Write a letter. ");
    } else if(!isNaN(arg[0])) {
      console.log("First element is number. Write a letter. ");
    } else if (arg.length >= 2 && !isNaN(arg[0])) {
      console.log("Write a letter not a sentence. ");
    } else if (vowel.includes(arg)) {
        console.log(arg + " is a vowel. ");
    } else if (consonant.includes(arg)) {
        console.log(arg + " is a consonant. ");
    } else if (!vowel.includes(arg) && !consonant.includes(arg)) {
        console.log("It's not letter.");
    } else if (arg === "" || arg === " ") {
      console.log("Emty field. Write a letter. ");
    } else {
        console.log("Something wrong. ");
    }
}