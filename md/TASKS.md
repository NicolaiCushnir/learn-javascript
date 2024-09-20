### Create games in javascript
- [Snake Game](https://www.youtube.com/watch?v=AaGK-fj-BAM&t=2s&ab_channel=TheCodingTrain)
- [Game-Dev BitBucket](https://bitbucket.org/Schedule93/games-dev/src/master/)
- [Cyber Forum - Поле чюдес : JS](https://www.cyberforum.ru/javascript/thread1426193.html)
- [Rock, scissor, papper](https://codepen.io/cliff538/pen/aHxfr)
- [Gues the number](GUES_NUMBER.md)

### Future Tasks:
1. [] Scrie o programă pentru browser, identic cu `Canguourou` [Link 1](https://sites.google.com/view/onlinecursuri/INFORMATICA/clasa-a-viii-a/semestrul-ii-8/no%C8%9Biune-de-algoritm) și [Link 2](https://www.scribd.com/presentation/427414121/Executantul-Cangourou) Uite-te la poză. ![image](../img/cangur.png)
2. [x] Arată în consolă cîte numere sa găsit comune în 2 arr. ?
```js
// Arată în consolă cîte numere sa găsit comune cele două masive.
var arr_1 = ["zece", "unu", "trei", "noua", "trei"];
var arr_2 = ["doi", "unu", "noua", "zece"];
function box () {
  var count = 0;
  for(var i = 0; i < arr_1.length; i++ ) {
    for(var j = 0; j < arr_2.length; j++) {
      if(arr_1[i] === arr_2[j]) {
        count += 1;
      }
    }
  }

  return count;
}

console.log( box() );
```
3. [x] Arată în consolă doar elementul care nu se repetă. `var arr = [1,1,8,8,2,2,4,4,3,3,5,9,9];` Mai bine spus numărul 5 din varibila arr.
4. [x] [Как проверить гласные в JavaScript?](https://stackoverflow.com/questions/55967359/check-if-is-vowel-or-consonant/55967429#55967429)
5. []. [Code review](https://codereview.stackexchange.com/questions/128121/count-the-number-of-vowels-and-consonants/128127)
6. []. [Three ways to repeat a string in JavaScript
](https://www.freecodecamp.org/news/three-ways-to-repeat-a-string-in-javascript-2a9053b93a2d/)
7. []. [Count the number of occurrences of a specific character in a string](http://www.codecodex.com/wiki/index.php?title=Count_the_number_of_occurrences_of_a_specific_character_in_a_string#JavaScript)
8. [], [How to Count the Number of Properties of the JavaScript Object](https://dzone.com/articles/how-to-count-the-number-of-properties-of-the-javas)
9. [], [Следим за курсором. Делаем живые глаза](https://www.youtube.com/watch?v=Sftw1qKo_n0&list=PLQqEY2kzSbZ7nLB8fooOpq89XfuMmwtMW&index=19&t=631s)
10. [], [Lock at Frequent Question on Stack Overflow](https://stackoverflow.com/questions/tagged/javascript?sort=frequent) from JavaScript 
11. [] Test : Who are you from anime Naruto :) Look here like example [ProProfs](https://www.proprofs.com/quiz-school/story.php?title=which-naruto-character-are-you-most-like)
12. [] Check if first letter is `lowerCase` or `UpperCase`.
13. [] De fiecare data cand porneshti consola sa se maraeasca numarul (n += 1)
14. [] Algorithm bubble sort.
15. [] ~See in in file `scripts/check_letter.js` and align all errors.~
16. [] Check if exsist in array a object.
17. [] Work with data `Moment.js`
18. [] Write a program minutes and seconds in js but he(it) will be counting all seconds together with minutes. Learn [here](https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date)
19. [] Fibonaci. Take example from the book js.
20. [] if is undefined write something else
21. [] Work with table [View CodePen](https://codepen.io/keukenrolletje/pen/GooXrQ)
21. [] Создать массив заданной длины
23. [] If the symbols `{}, [], ()` are equal true else false
24. [] In partea stanga ai un bloc cu 7 poze mici cand dai pe fiecare poza, cu cursorul sa se schimbe poza + zoom + download a image.
25. [] Удалённое управление компьютером. SSH ?
26. [] TRELLO. What is this ?
27. [] Sa vezi cîte argumente sunt într-o funcție. **MADE**
```javascript
function count_arguments(arg1, arg2, arg3, arg4, arg5) {
  data = arguments.length;
  for (var i = 0; i < data; i++) {
    console.log(i);
  }
}

count_arguments("room", "such", "zoo");
```

28. [] Să fac o programă ceva de gen sa scriu în consolă sau terminal `run program` de exemplu, și o să-mi apară pe rînd fiecare programă pe care am făcut cu ajutorul la js. În plus de fiecare cînd o să pornesc progrma să apară în forma `random` cît și prima atît și următoarele pînă la sfîrșit cu așa scop să nu se repete nici una din ele. Probabil o sa am un array cu mai multe array-uri in el. Treb de gindit ...

29. [] Treb sa fac un program care am ca argument 3 argumente, x, y, z. Cate combinatii pot sa fac cu ele ? Dar daca in loc de 3 argumente punem o litera care va insemna cat de multe argumente va fii si atentie va calcula iarasi cate combinatii va fii.
30. [] How many words are in argument. But in a sentence or comma? 
Pentru fiecare element din argument
31. [] Calculează cîte vocale sunt intr-un cuvînt/arg
32. [x] Factorial
33. [] Create a program which you will can make difference between a real word and symbols which does not exist in real world. Exemple. `ssdfsdfa`. This is not a word but `travel` is a word.
34. [] Cum din multe masive să faci un masiv intreg ? Exemple : [Link 1](https://overcoder.net/q/2569/%D0%BA%D0%B0%D0%BA-%D0%BE%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%82%D1%8C-%D0%B4%D0%B2%D0%B0-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B0-%D0%B2-javascript-%D0%B8-%D0%B4%D0%B5%D0%B4%D1%83%D0%BF%D0%BB%D0%B8%D1%86%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D1%8B)
35. [] Ai un array. FIe `var arr = [2,4,2,1,5,7,6,9,8,0];`. Si la fiecare iteratie sati dea un masiv random din aceste numere. Adica din toate aceste 10 elemente * la 10 iteratii. Undeva o sa ai matinca 100 de variante. Ah da mai inainte de toate incera ceva de gen:

36. [] Asta e important. Nu sterge ci rezolva in js.

```py
def shuffle(a):
    n = len(a)
    for i in range(n - 1):  # i from 0 to n-2, inclusive.
        j = random.randrange(i, n)  # j from i to n-1, inclusive.
        a[i], a[j] = a[j], a[i]  # swap a[i] and a[j].
```

37. [] To generate a milion names and last names for database Postgres like example. Și de aici să faci diferite manipulări de exemplu sortarea tuturor utilizatorilor care au proprietateea - locuesc in Moldova. Cu alte cuvinte fiecare utilizator sa aiba proprietati, dar asta e deja alta programa adaugatoare. Example:

```js
// și așa să fie la fiecare utilizator
var user_37234 = {
  id: 37234,
  name: "Nicolai Cushnir",
  gender: "male",
  age: 28,
  country: "Moldova",
  posts: 0,
  comments: 0,
  last_vizited: "1 hour ago",
  rank: "junior" 
}
```

38. [] Generarea utilziatorilor : să arate ceva de gen așa :

```js
Dion Dupont
Rohaan Berg
Riya Poole
Eli Petty
Wasim Yoder
Muna Leblanc
Farhan Mcguire
Carolyn Lozano
Arif Parsons
Fynn Butler
```

39. [] Как сделать расширение для браузера? Тика как `Ad Block`, `Alexa Trafic Rank`, `Build width Technology`
40. [] See what type of data is :

```Algorithm
check type of data:
* number
* string
  1. "2"
  2. 
* undefined
  * emty field
  * "" || '' || " " || ' ' ;
* nall
* object
* array
* symbols : 
  {<>=-!.,* **() {} }
```

41. [] Crează un bot.
42. [] Cum sā i-ei de pe alte resurse API informații de care ai nevoie. Spre exemplu: Noutățile care se publică sā fie la mine în database ???
43. Și altele 
44. Cum să fac emiterea mausului în JavaScript și Node.js ? (Why ?):
    * În primul rînd pentru a testa aplicațiile tale web și automatiza.
    * Pentru ca să nu deschid manual de fiecare dată cînd pornesc calculatorul, următoarele programe: {Git Bash, Google Chrome, nodemon name_your_projects, Compass, etc. }
    * Игровые боты. Не важно - это твоя игра или нет. Смысл в том чтобы имитировать действие человека. Будь то Strong Hold Crusader. Ну или Lineage 2. 🙂
46. And others tasks ...

### Not Important. It's for me.
* [Emoji](https://gist.github.com/AliMD/3344523)
* [Basic writing and formatting syntax
](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)
* [Codepen](https://codepen.io/)
* [Regular Expression](https://regex101.com/)
