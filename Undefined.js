// Definition: undefined is a primitive value in JavaScript.
// It represents the absence of a value or a value that hasn't been assigned yet.

// Type undefined (type is its own)
console.log(typeof undefined); // undefined

// How it occurs
// 1. When a variable is declared but not initialized:
let a;
console.log(a); // undefined

// 2.When a function doesn't explicitly return a value
function test() {}
console.log(test()); // undefined

// 3.When accessing an object property or array element that doesn't exist
let obj = {};
console.log(obj.a); // undefined

// What happens if you try to access a variable that hasn't been declared?

// If you declare but don't initialize: It results in undefined.
// If you don't declare it at all: It throws a ReferenceError

// console.log(arr); // Reference error : arr is not defined

// undefined coerces to NaN in mathematical operations.
console.log(1 + undefined); //NaN

//How can you check if a variable is undefined?

// using the typeof operator
if (typeof a === "undefined") {
  console.log("a is undefined");
}

// using strict equal to
if (a === undefined) {
  console.log("a is undefined");
}

// How do default parameters handle undefined?
// Function parameters default to their specified value if undefined is passed explicitly

function greet(name = "Guest") {
  return `Hello, ${name}`;
}
console.log(greet()); // Hello, Guest
console.log(greet(undefined)); // Hello, Guest
console.log(greet(null)); // Hello, null

console.log("=====================");
console.log(undefined == undefined);
console.log(undefined === undefined);

// undefined behaviour in json (not considered the property itself when you gave undefined as a value)
const js = { name: undefined };
console.log(JSON.stringify(js)); // {}

