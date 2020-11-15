
// Sa se repete numai o singura data

function ronc(){
  var str = "bine ai venit";
  var alfabetul = "qwertyuiopasdfghjklzxcvbnm0123456789";
  var result = "";
  var count = 0;
  for(var i = 0; i < alfabetul.length; i++){
    for(var j = 0; j < str.length; j++){
      if(alfabetul[i] === str[j]){
        count += 1;
      }
    }

    if(count === 1 ){
      result += alfabetul[i];
    }
  }

  console.log(result);
}

ronc()