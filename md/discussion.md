### [return main page](../README.md) || Тут будет осуждение решение проблем и почему так.

### Пример 1. For Loop and Array together with paradox else :
* Во перых! есть такой код, который показан ниже. Сразу говорю что он не правельный. В прочем, как и другие ниже примеры будут. Но не волнуимься, мы разберём все примеры подряд, почему так. Так что не переживаем, всё будет хорошо. 
* tasks: Мы хотели бы посмотреть в базу даннх, в нашем случее это переменая `arr`. И найти `имя польхователься`, если конешно он есть в наш массив. И вернть ответ, есть или нет.
```js
// users
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

let found = false;

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
// console.table( main() );
console.log( main() );
```

* **Explication at errors from above** :
- err 1.
- err 2.
- err 3.
- err n.

* **Conclusions**:
1. Первый момент - `arr[i].name` && `i`
2. Второй момент - `скобки` и `else`
3. Третий момент - переменая `found` и `break`

* А вот собствено правельный пример.
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
	let found = false;
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].name === arg) {
			console.log(arg);
			console.log("Da! este asa nume in bazda de date.");
			found = true;
			break;
		}
	}

	if(!found) {
		console.log("Nui asa nume in baza de date.");
	}
}

// Show The Result :
main("Rusu Veseslav");

```

### Пример 2. ???
Soon will be
```js
console.log("soon will be ...");
```

### Extern links :
* link 1
* link 2
