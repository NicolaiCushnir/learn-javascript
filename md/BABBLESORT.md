
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

### Extern links :
* link 1
* link 2
