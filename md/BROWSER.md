### Browser JavaScript

* Scrie o funcție unde ai să introduci o propoziție necunoscută/ca parametru, apoi ai să întrebi de cîte ori vrei să se repete.

```js
var sentence = prompt("Scrie o propoziție. ");
var string = prompt("De cîte ori o să se repete");
var times = parseInt(string);

for(var i = 1; i <= times; i++) {
	document.write(i + ". " + sentence + "<br />");
}
```

* Learn all about callback functions.

```js
// Example 1 :
function show_user_name(name) {
	alert("Hello! " + name + ".");
}

function writeUserName(callback) {
	var name = prompt("Please, write your name.");
	callback(name);
}

writeUserName(show_user_name);

// Example 2 :
function main(callback) {
	return callback();
}

function callback() {
	return "this is a simple callback function.";
}

alert( main(callback) );
```

* play ... 

```js
function z () {
	var a = "123";
	var b = a.split(); // b = [1,3,5,1];
	var c = prompt("Introdu un numar");
	var d = [];
	for(var i = 0; i < b.length; i++) {
		if(c === b[i]) {
			d.push(b[i]);
		}
	}

	alert(d.length);
}
```

* Vezi ce e cu acest cod. [Explicaation](https://davidwalsh.name/mouse-trailer-cursor)

```js
window.addEvent('domready',function() {
	var container = $(document.body),
		speed = 1200;
	container.addEvent('mousemove',function(e) {
		var image = new Element('img',{
			src: 'pointer.png',
			styles: {
				position: 'absolute',
				top: e.page.y,
				left: e.page.x
			},
			tween: {
				duration: speed,
				onComplete: function() {
					image.dispose();
				}
			}
		}).inject(container,'top').fade('out');
	});
});
```

-----------------------------------------------------------------------------------------------

Below is mess and i must clean but i am lazy. So be patient.

-----------------------------------------------------------------------------------------------

* `onload=""`, `onresize=""`, `onclick=""`



Разница бежду событиями `onresize` и `onclick` иницлиируются пользователем, а onload — нет.

* cookie methods:
	- `readCookie();`
	- `writeCookie();`
	- `eraseCookie();`

* The book from O'REILLY : iRock exercise with stone. But i want to do without img tag, but i can't.

```html
<img onclick="myFunction();" id="myImg" src="img/iRock.png">
<script>
	function myFunction() {
 		document.getElementById("myImg").src = "img/rock_happy.png";
	}
</script>
```


* Aici este un simplu comentariu pentru mine deoarece :
1. eu vreu sa lucrez cu DOM elements
2. vreau sa verific if pot lucra `remote`
