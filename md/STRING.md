### String Algorithms :

* Show only common name in the console.
```javascript
function common_name() {
  var arr_1 = ["Naruto", "Sacura", "Light", "Zabuza"];
  var arr_2 = ["Light", "Yagami", "Rino", "Gaara"];

  for(var i of arr_1) {
    for(var j of arr_2) {
      if(i === j) {
        console.log(i);
      } else {
        console.log("You don't have common name.");
        // view more later why reapaet at each for loop iteration.
        return;
      }
    }
  }
}
```


* Repeat only one time the letter from string. See here a example analogy [link](https://www.codegrepper.com/code-examples/javascript/javascript+return+repeated+items+from+an+array+only+once) **string algorithms**

```js
// wrong ...
function ronc(){
var str = "1w2e3e4r5t6y7uhjhjjhjhj0pd3f4g5y6",
  alfabetul = "abcdefghijklmnomxyz0123456789",
  result = "";

  for(i = 0; i < alfabetul.length; i++){
    var count = 0;
    for(j = 0;j < str.length; j++){
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
```

* Reverse word. 
```js
// Example 1
function reverseString(str) {
  var newString = "";
  for(let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  console.log(newString);
}

// Example 2
function StringUtil() {
    this.reverseWords = function(str) {
        var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        return result.trim();
    }
}
```

* How many words are in a sentence. 

```javascript
function count_spaces(sentence) {
  var count = 0;
  for(var i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
      count++;
    }
  }

  return count;
}
``` 

* orașe comune

```javascript
function same_place() {
  var myPlaces = ['United Kingdom', 'Russian', 'Moldova', "Romania"];
  var friendPlaces = ['Canada', 'United Kingdom', 'Moldova'];
  for (var i = 0; i < myPlaces.length; i++ ) { 
      for (var j = 0; j < friendPlaces.length; j++) {
          if (myPlaces[i] === friendPlaces[j]) {
              console.log('La fel : ' + myPlaces[i]);
          }
      }
  }
}
```

* check if is number or string

```js
function check_if_is_number(arg) {
  if(typeof arg) {
    console.log(typeof arg);
  } else (typeof arg) {
    console.log(typeof arg);
  }
}
```

* Sorting names chronologically.

```js
var sortUser = function() {
  var users = ["Zico", "Shtefan", "Danu", "Vasile", "Alex"];
  var put = users.sort();
  for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
}
```