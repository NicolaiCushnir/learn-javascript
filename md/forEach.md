### return main page

### Topic. Explanation, forEach Loop :
* Во-первых, чтобы пройтись по массиву с помощью метода forEach, вам понадобится функция обратного вызова (или анонимная функция):

```js
numbers.forEach(function() {
    // code
});
```

* Функция будет выполняться для каждого элемента массива. Он должен принимать хотя бы один параметр, представляющий элементы массива:

```js
numbers.forEach(function(number) {
    console.log(number);
});
```

* Это всё, что нам нужно было сделать для перебора массива:

### Alternative. Arrow functions :
Soon will be ...

### Difference between "For Loop" and "For Each":
```js
let arr = ['one', 'two', 'three'];
arr.forEach((elem) => {
	console.log(elem);
});
```

### Tips for - forEach Loop:
**Notice 1** Метод forEach()экземпляров Arrayвыполняет предоставленную функцию один раз для каждого элемента массива.

**Notice 2** foreach укорачивает код для перебора коллекций (списки, массивы и т. п.), когда нам нужно только получить элементы из них, без работы с индексами.

**Notice 3** В JavaScript метод forEach() позволяет выполнить функцию обратного вызова по разу для всех элементов в массиве по порядку. Стоит отметить, что он не работает для удаленных и пропущенных объектов

**Notice 4** Использование forEach() лучше всего подходит для моментов, когда одна и та же операция должна выполняться на каждом элементе. У функции один обязательный параметр — значение — и три дополнительных параметра: для индекса, базового массива и присвоенного значения this

### Code Examples :
* Simple exemple.
```js
let num = [1, 2, 3, 4, 5];
num.forEach(function(elem) {
    console.log(elem);
});
```

### Extern links :
* [JavaScript forEach – How to Loop Through an Array in JS](https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/)
* [Stack Overflow - If statement not working inside foreach loop JavaScript](https://stackoverflow.com/questions/50773374/if-statement-not-working-inside-foreach-loop-javascript)
