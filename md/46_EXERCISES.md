### Resolved exercises in JavaScript
1. write a function `maxTwoNumbers();` two numers.
```js
function maxTwoNumbers(a1, a2) {
  if (a1 === a2) {
    console.log("Numbers are equal.")
  } else if (a1 > a2) {
    console.log("The maximum numer is : " + a1);
  } else {
    console.log("The maximum numer is : " + a2);
  }
}
```

2. Define a function `maximumThreeNumbers();` that takes three numbers as arguments and returns the largest of them. Example: max(3, 7, 1).
```js
function maximumThreeNumbers(arg1, arg2, arg3) {
  if(arg1 > arg2 && arg1 > arg3) {
    console.log("arg1 is more bigger.");
  } else if(arg2 > arg1 && arg2 > arg3) {
    console.log("arg2 is more bigger.");
  } else if(arg3 > arg1 && arg3 > arg2) {
    console.log("arg3 is more bigger.");
  } else if (arg1 === arg2 && arg2 === arg3) {
    console.log("them are equal");
  } else {
    console.log("There are nothing arguments.");
  }
}

```

3. Define a function `lengthOfString();` that computes the length of a given string. 
```javascript
// Example 1
function lengthOfString(sentence) {
  var count = 0;
  for(var i = 0; i < sentence.length; i++) {
    count += 1;
  }

  console.log(count);
}
```

```javascript
// Example 2
function len(str) {
  let count = 0;
  for (let i = 0; ; i++) {
    if (str[i] !== undefined) count++; else break;
  }
  
  console.log(count);
}
```

4. Write a function that takes a character and returns if it is a vowel or consonant. 
```javascript
// Example 1
function letter(arg) {
  var vowel = "aeouiAEOUI";
  let consonant = true;
  for (var i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      consonant = false;
    }
  }
  if (consonant) {
    console.log("consonant");
  } else {
    console.log("vowel");
  }
}

// Example 2
function letter_method_return(arg) {
  var vowel = "aeouiAEOUI";
  var result = "";
  for (var i = 0; i < vowel.length; i++) {
    if (arg === vowel[i]) {
      console.log("vowel");
      return;
    }
  }
  console.log("consonant");
}

// Example 3
function letter_indexof(arg) {
    var vowels = ["a","e","i","o","u"]; 
    if(vowels.indexOf(arg.toLowerCase()) >= 0) {
        console.log("vowel");
    } else {
        console.log("consonant");
    }   
}

// Example 4
const letter = arg => console.log(
  /[aeiou]/i.test(arg) ? 'vowel' : 'consonant'
);
```

5. Write a function `DoubleConsonant();` which doubles consonants and puts the letter "O" between them. View all list with double consonant resolved. [Here](double_consonant.md)
```js
// Example 1 
function double_consonant(sentence) {
  var result = "";
  var conson = "qwrtypsdfghjklzxcvbnm";
  for(var i = 0; i < sentence.length; i++) {
    for(var j = 0; j < conson.length; j++) {
      if(sentence[i] === conson[j]) {
        result += sentence[i] + "o" + sentence[i];
      }
    }
  }
  return result;  
}

// Example 2 
function DoubleConsonant(l) {
  var source = "here is a simple text for me";
  var result = "";
  var consonants = "bcdfghjklmnpqrstvwxyz";
  if (consonants.indexOf(l.toLowerCase()) != -1) return `${l}o${l}`;
  return l;
  for (var l of source) {
    result += DoubleConsonant(l);
  }
}
```

6. Define a function `sum();` and a function `multiply();` that sums and multiplies (respectively) all the numbers in a list of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4]) should return 24.
```js
function sum(a1, a2, a3, a4) {
  result = 0;
  result += a1 + a2 + a3 + a4;
  console.log(result);
}

function multiplay(a1, a2, a3, a4) {
  result = 0;
  result += a1 * a2 * a3 * a4;
  console.log(result);
}
```

7. Write a function `reverse();` that will reverse the sentence.
```js
function reverse(str) {
  var newString = "";
    for(let i = str.length -1; i >= 0; i--) {
    newString += str[i];
  }

  console.log(newString);
}
```

8. write a funtion `polindrome();`
```js
function palindrome(str) {
 var reg = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(reg, '');
 var len = str.length;
 for (var i = 0; i < len / 2; i++) {
   if (str[i] !== str[len - 1 - i]) { 
       return false;
   }
 }
 return true; 
}
```

9. write a function `common_arr();`. La exercitui ista trebuie sa faci altfel uite [aici](https://github.com/arsho/46-Simple-Python-Exercises-Solutions/blob/master/problem_09_alternative.py).
```js
function arr_common() {
  var nume = ["ion", "alex", "vasile", "vadim"];
  var nume2 = ["sandu", "alex", "cristi", "vova"];  
  for(var n of nume) {
    if(nume2.indexOf(n) === -1) {
      console.log(n);
    }
  }
}
```

### Similar resources
* [46 Simple Python Exercises 
April 03, 2017](http://uselesstruth.blogspot.md/2017/04/46-simple-python-exercises.html)
* [JS Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/)