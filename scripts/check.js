// repeat only a one time the letter.
function ronc(){
  var str = "eebinee";
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
