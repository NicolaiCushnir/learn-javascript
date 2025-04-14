### [return main page](../README.md) || Topic. Resolved 46 exercises in JavaScript from Python.
1. Write a function `maxTwoNumbers();` two numers.
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
// Example 1 : Algorithm
function check_letter_algorithm_method(arg) {
  let vowel = "aeouiAEOUI";
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

// Example 2 : indexOf();
var vowel = "aeouiAEOUI";
function main(arg) {
  if(vowel.indexOf(arg) === -1) {
    return "consonant";
  } else {
    return "vowel";
  }
}

// Example 3 : RegExp
const check_letter_method_regexp = arg => console.log(
  /[aeiou]/i.test(arg) ? 'vowel' : 'consonant'
);

// Exemple 4 : include();
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
function double_consonant_index_of(l) {
  var source = "here is a simple text for me";
  var result = "";
  var consonants = "bcdfghjklmnpqrstvwxyz";
  if (consonants.indexOf(l.toLowerCase()) != -1) return `${l}o${l}`;
  return l;
  for (var l of source) {
    result += double_consonant_index_of(l);
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
  var new_string = "";
    for(let i = str.length -1; i >= 0; i--) {
    new_string += str[i];
  }

  console.log(new_string);
}
```

8. Write a funtion `polindrome();`
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

9. Write a function `common_arr();`. La exercitui ista trebuie sa faci altfel uite [aici](https://github.com/arsho/46-Simple-Python-Exercises-Solutions/blob/master/problem_09_alternative.py).
```js
function arr_common() {
  var name = ["ion", "alex", "vasile", "vadim"];
  var name2 = ["sandu", "alex", "cristi", "vova"];  
  for(var n of name) {
    if(name2.indexOf(n) === -1) {
      console.log(n);
    }
  }
}
```

10. Verifică dacă în unul din aceste doua arrays(arr1, arr2), are cel puțin un număr comun atunci true else false.
```js
// Example 1
var array1 = [2, 3, 4, 14];
var array2 = [14, 7, 9];

const comunNumber = array1.find(value => array2.includes(value));
console.log(comunNumber ? true : false);

// Example 2 : Wrong
var a = [12, 9, 8];
var b = [1, 1, 3, 12];

function main() {
  for(var i = 0; i < a.length; i++) {
    var count = 0;
    for(var j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        count +=1;
      }
    }
  }

  if(count === 1 || count > 1) {
    return true;
  } else {
    return false;
  }
}
```

11. Generează o funcție `generate_string_characters();` Unde va primi doi parametri. De tip number și string. Unde la primul argument scriem de cîte ori string-ul din al doi-lea parametru se va repeta. De exemplu: generate(5, "x"); Se va da rezultatul: generate(5, "xxxxx");
```js
function generate_string_characters(count_string, char) {
  return char.repeat(count_string);
}

console.log(generate_string_characters(15, "[0], "));
``` 

12. Create a program where you will write an array from numbers. After what you made this, make all these to be from stars, like this `*`. Exemple: `[ '****', '*********', '*******' ];`
```js
// Exemple 1:
console.log("will be ...");

// Exemple 2 :
let arr = [4, 9, 7];
let result = arr.map(num => '*'.repeat(num));
console.log(result);
```

### Similar resources
* [46 Simple Python Exercises 
April 03, 2017](http://uselesstruth.blogspot.md/2017/04/46-simple-python-exercises.html)
* [Github : 46-Simple-Python-Exercises-Solutions](https://github.com/arsho/46-Simple-Python-Exercises-Solutions/blob/master/problem_10.py)
* [JS Exercises, Practice, Solution](https://www.w3resource.com/javascript-exercises/)