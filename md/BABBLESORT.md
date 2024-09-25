
### [return main page](../README.md) || Topic Babblesort :

```js
// Example 1:
function bubbleSort(arr) {
    var n = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

// Пример использования
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]
```

* Example 2:
```js
function bubbleSort(arr) {
    var n = arr.length;
    var swapped = true;

    while (swapped) {
        swapped = false;
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    }

    return arr;
}

// Пример использования
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]
```

* Example 3: Обяснение! В этом случае оба цикла for используются: внешний цикл проходит по каждому элементу массива, а внутренний цикл сравнивает соседние элементы и выполняет их замену, если нужно. swapped не нужен, так как количество проверок уменьшается с каждой итерацией внешнего цикла (это реализовано через n - i - 1 в условии внутреннего цикла).
```js
function bubbleSort(arr) {
    var n = arr.length;
    
    for (var i = 0; i < n; i++) {
        // Внутренний цикл для сравнения соседних элементов
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

// Пример использования
var arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // [2, 3, 4, 5, 8]
```

### Extern links :
* link 1
* link 2
