### Algorithms and structure data
* [String](../md/STRING.md) 

* [Sort](../md/SORTING.md)

* Factorial
```js
function factorial(n) {
    if (n < 0) {
        console.log("Te rog să introduci un număr întreg pozitiv.");
        return;
    }

    let result = 1;
    let steps = [];

    for (let i = n; i > 0; i--) {
        result *= i;
        steps.push(i);
    }

    for (let i = n; i > 0; i--) {
        let currentSteps = steps.slice(steps.length - i).join(" * ");
        let currentResult = steps.slice(steps.length - i).reduce((a, b) => a * b, 1);
        console.log(`${i}! = ${currentSteps} = ${currentResult}`);
    }
}

factorial(10);
```

* [Fibonacci](../md/FIBONACI.md) 
* Backtracking
* Cache
* Алгоритм графы
* Битовые манипуляции
* Алгоритмы и их сложности
* Linked List
* Queue
* Stack
* Hash Table, Hashes
* Linear alebra 
* Binary Search Tree
* Heap
* Priority Queue
* Threes
* Other
* Find
* Linear Search
* Binary Search
* Permutations
* Combinations
* Quicksort
* Greedy-algorithm
* Cryptography
* Genetics
* Sequence algorithms [wiki](https://en.wikipedia.org/wiki/Sequence)

### Extern links :
* [Wiki : List of algorithms](https://en.wikipedia.org/wiki/List_of_algorithms)
