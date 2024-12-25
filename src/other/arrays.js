
// ADD/REMOVE ITEMS


// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning

let arr = [1, 2, 3];

arr.push(4); // arr = [1, 2, 3, 4]
arr.pop(); // arr = [1, 2, 3]
arr.shift(); // arr = [2, 3]
arr.unshift(0); // arr = [0, 2, 3]

// Please note that push/pop run fast, while shift/unshift are slow.

// arr.splice(index[, deleteCount, elem1, ..., elemN]) – at index, deletes deleteCount elements and inserts elem1, ..., elemN.

arr.splice(1, 0, 1.5); // arr = [0, 1.5, 2, 3]
arr.splice(1, 1); // arr = [0, 2, 3]


// arr.slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

let newArr = arr.slice(1, 3); // [2, 3]
let wholeArr = arr.slice(); // [0, 2, 3]

// arr.concat(arg1, arg2...) – returns a new array: copies all members of the current array and adds arg1, arg2... to it. If an argument argN is an array, then all its elements are copied. arr.concat(arg) does the same.

let arrTmp = [4, 5, 6];
let mergedArr = arr.concat(arrTmp); // [0, 2, 3, 4, 5, 6]

// arr.forEach((item, index, array) => {}) – calls a function for each element, does not return anything.

arr.forEach((item, index, array) => {
    console.log(item, index, array);
});

// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.

console.log(arr.indexOf(2)); // 1

// arr.lastIndexOf(item, from) – same, but looks for from right to left.

console.log(arr.lastIndexOf(2)); // 1

// arr.includes(item, from) – looks for item starting from index from, returns true if found.

console.log(arr.includes(2)); // true

// arr.find(function) – looks for a value that matches a condition, returns the first one found.

let found = arr.find(item => item > 1); // 2
let found2 = arr.find(item => item > 3); // undefined

let foundIndex = arr.findIndex(item => item > 1); // 1

// arr.filter(function) – filters elements through a function, returns all values that make it return true.

let filtered = arr.filter(item => item > 1); // [2, 3]


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// TRANSFORM AN ARRAY

let arr2 = ['Bilbo', 'Gandalf', 'Nazgul'];

// arr.map(function) – calls the function for each element of the array and returns the array of results.

let lengths = arr2.map(item => item.length); // [5, 7, 6]

// arr.sort(function) – sorts the array in place, then returns it.

arr2.sort(); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]
arr2.sort((a, b) => a.length - b.length); // [ 'Nazgul', 'Bilbo', 'Gandalf' ]

// arr.reverse() – reverses the array in place, then returns it.

arr2.reverse(); // [ 'Nazgul', 'Gandalf', 'Bilbo' ]

// arr.split(delim) – splits a string into an array by a delimiter.

let str = 'Bilbo, Gandalf, Nazgul';
let arr3 = str.split(', '); // [ 'Bilbo', 'Gandalf', 'Nazgul' ]

// arr.join(glue) – joins the array into a string using glue between elements.

let joined = arr3.join('; '); // 'Bilbo; Gandalf; Nazgul'

// arr.reduce((accumulator, item, index, array) => {...}, initial) – calculate a single value over the array by calling the function for each element and passing an intermediate result between the calls.

let sum = arr.reduce((acc, item, index, array) => acc + item, 0); // 5
let sentence = arr3.reduce((acc, item) => acc + item + ', ', ''); // 'Bilbo, Gandalf, Nazgul, '

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

