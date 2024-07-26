### Here I play with JavaScript.

* Each second will show in console, slow value at `i` like a infinity iteration.

```js
// Example 1 : Each second will show in console, slow value ...
var count = 1;
var interval = setInterval(function(){
  console.log("* Now value is : " + count), count++;
}, 1500);

// Example 2 : Or similar way like above example.
var i = 1;
var interval_id = setInterval(function(){
  console.log(" * Now value is : " + i), i++;
  var timeOutId = setTimeout(function(){ 
  }, 1000);
}, 1000);
```

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

* Check type of data. In al 3-lea exemplu cînd adaugăm la parametru un numaăr în formă de string de exemlu numarul 2. Va arata asa `"2"`, tipul lui de date va fi strin nu numar deoarece asa vrrau eu. :) Dar la exemplu 2 e cu totul invers, `"2"` deja va fi number nu string. Be careful.
```js
// Example 1 : Redactează acest cod ...
function check_type_of_data(arg) {
  if(arg === String(arg)) {
    return "String";
  } else if (arg === Number(arg)) {
    return "Number";
  } else {
    return "Something Wrong";
  }
}

// Example 2
function check_type_of_data(data) {
  if(!isNaN(data) && typeof(data) === 'number') {
    console.log("Type of Data is : Number. ");
  } else if(isNaN(data) && typeof(data) === 'string' ) {
    console.log("Type of Data is : String. ")
  } else {
    console.log("none ...");
  }
}

// Example 3 : 
function check_type_of_data(data) {
  if(data === undefined) {
    console.log("type of data is : undefined. ");
  } else if(!isNaN(data) && typeof(data) === 'number') {
    console.log("Type of Data is : Number. ");
  } else if( typeof(data) === 'string') {
    console.log("Type of Data is : String. ")
  } else {
    console.log("none ...");
  }
}
```


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

* Show in console only numbers which are repeted.
```js
console.log("not be sonn ...");
```

* Show only numbers that are not repeated.
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

* Cheamă funcția `step();` de mai multe ori. Ai să vezi cum la fiecare chemare numărul se va ridica cu 1.

```js
let count = 1;
function step() {
  count++;
  console.log(count);
}
```

* De făcut în javascript simulare a semaforului, doar în sonsolă. În loc de culori să fie o variabilă `let colors = ["red", "yellow", "green"];` care va simula sevaforul. Apoi fiecare cinci secunde trebuie să schimbe culoarea., adica cuvintul. 

```js
// simulate trafic light
function traffic_light () {
  let colors = ["red", "yellow", "green"];
  let count_index = 0;

  // Funcție pentru a actualiza culoarea semaforului
  function update_color() {
    
    // Curăță consola
    console.clear();

    // Afișează culoarea curentă
    console.log(colors[count_index]);

    // Actualizează indexul culorii curente
        count_index = (count_index + 1) % colors.length;
  }

  // Schimbă culoarea la fiecare 5 secunde
    setInterval(update_color, 5000);
}
```