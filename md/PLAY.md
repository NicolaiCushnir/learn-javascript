### Here I will play with JavaScript.

* A simple triangle. **others algorithms**
```js
function triangle () {
  var put = '';
  for(var i = 1; i <= 6; i++) {
    console.log(put += ' *');
  }
}
```

* Infinite iteration in for loop.

```js
function infiniteForLoop () {
  for (let i = 0; ; i++) { console.log(i) }
}
```

* count how many vowels there are in a sentence. **string algorithms**
```js
// Example 1. Here is little wrong ...
function count_vowel(sentence) {
  var vowel = "aeouiAEOUI";
  var result = "";
  for(var i = 0; i < sentence.length; i++) {
    var count = 0;
    for(var j = 0; j < vowel.length; j++) {
      if(sentence[i] === vowel[j]) {
        console.log(count);
      }   
    } 
  }
}

// Example 2
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
```


* Chess board **others algorithms**
```javascript
function cheesBoard () {
    var chessBoard = "";
    var size = 8;
    for (var lineCounter = 1; lineCounter < size; lineCounter++) {
        if (lineCounter % 2 === 0) {
            for (var charCounter = 1; charCounter < size; charCounter++) {
                var evenOdd = (charCounter % 2 === 0);
                switch (evenOdd) {
                    case true:
                        (chessBoard += "#"); break;
                    case false:
                        (chessBoard += " "); break;
                }
            }
        }

    else {
        for (var charCounter = 1; charCounter < size; charCounter++) {
            var evenOdd = (charCounter % 2 === 0);
            switch (evenOdd) {
                case true:
                    (chessBoard += " "); break;
                case false:
                    (chessBoard += "#"); break;
            }
        }
    }
    chessBoard += "\n";
    }
    console.log(chessBoard);
}
```

* Check if an array includes an object **others algorithms**
```javascript
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
```


* Show each letter from sentence which equal with vowel 

```js
// Example 1
function equal_vowel_for_loop (sentence) {
    var vowel = "aeouiAEOUI";
    for(var i = 0; i < sentence.length; i++) {
        for(var j = 0; j < vowel.length; j++) {
            if(sentence[i] === vowel[j]) {
                console.log(sentence[i]);
            }
        }
    }
}

// Example 2
function equal_vowel_while_loop(sentence) {
  var vowel = "aeouiAEOUI";
  var i = 0;

  while (i < sentence.length) {
    var j = 0;
    while (j < vowel.length) {
      // console.log("i=" + i + " j=" +j);
      if (sentence[i] === vowel[j]) {
        console.log(sentence[i]);
      }

      j++;
    }
    i++;
  }
}
```

* Repeat Character N Times. [Stack Overflow](https://stackoverflow.com/questions/1877475/repeat-character-n-times)

```js
console.log("not be soon ..."); 
```