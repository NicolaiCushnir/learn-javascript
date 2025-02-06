### [return main page](../README.md) || Topic Factorial :

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

### Extern links :
* link 1
* link 2
