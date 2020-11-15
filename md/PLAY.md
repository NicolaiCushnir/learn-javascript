### Here I will play with JavaScript.

* A simple triangle.
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
      if (sentence[i] === vowel[j]) {
        console.log(sentence[i]);
      }

      j++;
    }
    i++;
  }
}
```
