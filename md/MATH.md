### Mathematics Algorithms :

* Show in console only the indexes which are with pairs.
```js
function sortNumber () {
  // arata in consola doar indexurile pare.
  var array = [1, 2, 3, 5, 6, 7, 9, 8];
  for (var i = 0; i < array.length; i++) {
    // verificam daca idexul este par
    if(array[i] % 2 === 0){
      console.log(array[i]);
    }
  }
}
```

* Positive or negative numbers. 
```js
function positiveOrNegativeNumbers(unknownNumber) {
  if (unknownNumber % 2 === 0) {
    console.log('positive number');
  } else {
    console.log('negative number');
  }
}
```

* Common denominator at three and five. 
```js
// Example 1
function fizzBuzz() {
  for(var i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
      console.log("Fizz Booz");
    } else if(i % 3 === 0) {  
      console.log("Fizz");
    } else if(i % 5 === 0) {
      console.log("Booz");
    } else {
      console.log(i)
    }
  }
}

// Example 2 
function fizzBuzz () {
  var num = 0; // Be careful!
  for (var i = 0; i < 100; i++) {
    num += 1; // And Here!
    if (num % 3 === 0) {
      console.log('fizz');
    } else if (num % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(num);
    }
  }
}

// Example 3
function fizzb() {
  for (var i = 0; i <= 100; i++) {
    console.log(i, (i % 3 == 0 ? 'Fizz' : '') + (i % 5 == 0 ? 'Buzz' : ''));
  }
}
```

* Generate a random number between 1 and 100.
```javascript
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

* async sum 
```js
function asyncSum(arr, cb, index = 0, sum = 0){
    if(arr.length === index){
        cb(sum);
        return;
    }
    setTimeout(() => {
        asyncSum(arr, cb, index + 1, sum + arr[index]);
    }, 0)
}
console.log("A");
asyncSum([10, 20], (sum) => {
    console.log(sum);
});
console.log("B");
```

* Numere care nu se repetă
```js
function shortMethod () {
  var a = [2, 2,23,453,52,32,3,24,25,2,4,25,5,363,4,23,5,2];
  var b = [... new Set(a)];
  console.log(b);
}
```

* Exponent.
```js
function power() {
    var count = 1;
    for (var each = 0; each <= 20; each++) {
        console.log( 2 ** each);
    }
}
```