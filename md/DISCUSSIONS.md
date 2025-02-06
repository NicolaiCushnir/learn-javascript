### [return main page](../README.md) || Topic. Тут будет осуждение решение проблем и почему так :

### Пример 1. For Loop and Array together with paradox else :
* **Во перых!** есть такой код, который показан ниже. Сразу говорю что он не правельный. В прочем, как и другие ниже примеры будут. Но не волнуимься, мы разберём все примеры подряд, почему так. Так что не переживаем, всё будет хорошо. 
* **Tasks**: Мы хотели бы посмотреть в базу даннх, в нашем случее это переменая `arr`. И найти `имя польхователься`, если конешно он есть в наш массив. И вернть ответ, есть или нет.
* **The following example is wrong** - ❌. Be careful! 
```js
// users database :
let arr = [
	{
		"name": "Calincov Alexandru",
		"nickname": "Uciha Sasuke",
		"country": "Ukraina",
		"gender": "male",
		"age": 20,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Spătaru Ioana",
		"nickname": "don't_me_angry",
		"country": "Romania",
		"gender": "female",
		"age": 24,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Botnaru Artur",
		"nickname": "robin_good",
		"country": "Israel",
		"gender": "male",
		"age": 31,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Bendeac Ana",
		"nickname": "Annasoya",
		"country": "Italy",
		"gender": "female",
		"age": 35,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Cushnir Nicolai",
		"nickname": "Schedule83",
		"country": "United Kingdom",
		"gender": "male",
		"age": 22,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Melenic Alexandru",
		"nickname": "Barcelona22",
		"country": "Moldova",
		"gender": "male",
		"age": 22,
		"hair": "blonde",
		"tatto": "no"
	},
	{
		"name": "Alina Scutaru",
		"nickname": "Bianca",
		"country": "France",
		"gender": "female",
		"age": 19,
		"hair": "blonde",
		"tatto": "yes"
	},
];

function main(arg) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] === arg) {
			console.log(arg);
		} else {
			console.log("Nui așa nume în baza de date. ");
		}
	}
}

// Show The Result :
console.log( main() );
```

* **Ключевые моменты, why so?! Look:**
1. **Первый момент** - Проверяем `arr[i].name`, а не `arg === i` **или** `if(i <= arr.length`) из цикла for loop, то это не верно. Должно быть `i < arr.length`, иначе выйдешь за границы массива.
2. **Второй момент** -`arg === i` сравнивает строку (`arg`) с числом (`i`), что не имеет смысла.
3. **Третии момент** - `скобки` и `else`. Убрать `return` из `else`, чтобы оно не прерывало цикл. Ну то есть `else` имеет скрытый return. Он сравнивает с первым елемнтом и если не найден то возращяет результат, вместо того чтобы пройтись по всем обьектам из масива. По этому мы и убрали `else`. То есть другими словами, чтобы оно не прерывало цикл.
4. **Четфёртый момент** - переменая `found` и `break`. После чего нашли останавливаем цикл.

* А вот собствено и правельный пример. ✅
```js
let arr = [
	{
		"name": "Calincov Alexandru",
		"nickname": "Uciha Sasuke",
		"country": "Ukraina",
		"gender": "male",
		"age": 20,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Spătaru Ioana",
		"nickname": "don't_me_angry",
		"country": "Romania",
		"gender": "female",
		"age": 24,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Botnaru Artur",
		"nickname": "robin_good",
		"country": "Israel",
		"gender": "male",
		"age": 31,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Bendeac Ana",
		"nickname": "Annasoya",
		"country": "Italy",
		"gender": "female",
		"age": 35,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Nicolai Cushnir",
		"nickname": "Schedule83",
		"country": "United Kingdom",
		"gender": "male",
		"age": 22,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Melenic Alexandru",
		"nickname": "Barcelona22",
		"country": "Moldova",
		"gender": "male",
		"age": 22,
		"hair": "blonde",
		"tatto": "no"
	},
	{
		"name": "Alina Scutaru",
		"nickname": "Bianca",
		"country": "France",
		"gender": "female",
		"age": 19,
		"hair": "blonde",
		"tatto": "yes"
	},
];

function main(arg) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].name === arg) {
			console.log(arg);
			console.log("Da! este asa nume in bazda de date.");
		}
	}

	console.log("Nui asa nume in baza de date.");
	console.log(arg);
}
```

* А вот пример который мне нравиться большее. ✅
```js
let arr = [
	{
		"name": "Calincov Alexandru",
		"nickname": "Uciha Sasuke",
		"country": "Ukraina",
		"gender": "male",
		"age": 20,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Spătaru Ioana",
		"nickname": "don't_me_angry",
		"country": "Romania",
		"gender": "female",
		"age": 24,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Botnaru Artur",
		"nickname": "robin_good",
		"country": "Israel",
		"gender": "male",
		"age": 31,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Bendeac Ana",
		"nickname": "Annasoya",
		"country": "Italy",
		"gender": "female",
		"age": 35,
		"hair": "dark",
		"tatto": "yes"
	},
	{
		"name": "Cushnir Nicolai",
		"nickname": "Schedule83",
		"country": "United Kingdom",
		"gender": "male",
		"age": 22,
		"hair": "dark",
		"tatto": "no"
	},
	{
		"name": "Melenic Alexandru",
		"nickname": "Barcelona22",
		"country": "Moldova",
		"gender": "male",
		"age": 22,
		"hair": "blonde",
		"tatto": "no"
	},
	{
		"name": "Alina Scutaru",
		"nickname": "Bianca",
		"country": "France",
		"gender": "female",
		"age": 19,
		"hair": "blonde",
		"tatto": "yes"
	},
];

function main(arg) {
	let found = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].name === arg) {
			console.log("Yes! Exist so name in database: ");
			console.log(arg);
			found = true;
			break;
		}
	}

	if(!found) {
		console.log("No! Don't exist so name in database");
		console.log(arg);
	}
}

// Show The Result :
main("Cushnir Nicolai");
```

### Пример 2. forEach
* Создали `forEach` через анонимную функцию :
```js
let arr = [1,3,5,4,6,7,9,8];
arr.forEach(function(number){
	console.log(number);
});
```

* Аналогичный пример с использованием стрелочной функции:
```js
const printNumber = number => console.log(number);
numbers.forEach(printNumber);
```

* forEach с преобразаввание из строки в число.

```js
let arr = [1,3,5,4,6,7,9,8];
let store = [];

arr.forEach(function(number){
	store.push(number);
});

// Проверяем тип и преобразуем в число
if(typeof store === 'object') {

	// Преобразуем элементы в числа
	store = store.map(Number);
}

 // Выведет массив чисел
console.log( typeof(store) );
```

* С использование `prototype`:
```js
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Пример использования:
[1, 2, 3].myForEach((item, index) => {
    console.log(`Элемент: ${item}, Индекс: ${index}`);
});
```
### Extern links :
* link 1
* link 2
