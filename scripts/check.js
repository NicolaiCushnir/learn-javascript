var array1 = [2, 3, 4, 14];
var array2 = [14, 7, 9];

const comunNumber = array1.find(value => array2.includes(value));
console.log(comunNumber ? true : false);