
// repeat only a one time the letter.
function ronc(str){
  var alfabetul = "abcdefghijklmnomxyz0123456789";
  var result = "";
  var count = 0;

  for(i = 0; i < alfabetul.length; i++){
    for(j = 0; j < str.length; j++){
      if(alfabetul[i] === str[j]){
        count += 1;
      }
    }

    if(count === 1 ){
      result += alfabetul[i];
    }
  }

  return result;
}

console.log( ronc("goodgood") ); // god





















var user_1 = {
  id: 19121993,
  full_name: "Nicolai Cushnir",
  age: 27,
  gender: "male"
};

data = JSON.stringify(user_1); // from Oject to transform in => String


// data = JSON.parse(user_1); // from String to transform in => Object
console.log(typeof data) //obj






