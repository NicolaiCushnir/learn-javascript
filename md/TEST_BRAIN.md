* First question. What will be :

```js
f.call(null);

function f() {
  alert(this);
}
```

* Second question :

```js
let a = [1,2]

(function() { alert(a) })()
```

* Question 3. What will be ??? 

```js
let user = {
  sayHi: function() {
    alert(this);
  }
};

(user.sayBye = user.sayHi)();
```

* Question 4. What will be ???

```js
console.log("Will be later ...");
```

### Extern links :
* Brain Tests JavaScript
