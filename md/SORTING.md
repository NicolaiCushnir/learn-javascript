
* Arată în consolă fiecare nume în ordine cronologică. Dar invers ?
```js
var sort_user = function() {
  var users = ["Zico", "Stefan", "Ron", "Vandersar", "Alan"];
  var put = users.sort();
  for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
}
```

* Separate letters from numbers

```javascript
// Example 1
function split_letters_of_numbers () {
  var arr = 'abc123defgh456';
  var number = "";
  var letter = "";
  for (var each = 0; each < arr.length; each++) {
    if(isNaN(arr[each])) {
      letter += arr[each];
    } else {
      number += arr[each];
    }
  }
  console.log(number, letter);
}

// Example 2
function split_letters_of_numbers_2() {
  var arr = [2, 'b', 6, 'c'];
  var numbers = [];
  var strings = [];
  var arrLength = arr.length;
  for(var i=0; i<arr.length; i++) {
    if(typeof arr[i]  == 'number') {
      numbers.push(arr[i]);
    } else {
      strings.push(arr[i]);
    }
  }

  console.log(numbers, strings);
}

// Example 3
function sortare() {
  var arr = "1243jkldhfkghfdhfnfst6445u65erhgdht";
  var putNumber = "";
  var putLetter = "";
  for(i = 0; i < arr.length; i++) {
    if(parseInt(arr[i])){
      putNumber += arr[i];
    } else {
      putLetter += arr[i];
    }
  }

  console.log(putLetter, putNumber);
}
```
