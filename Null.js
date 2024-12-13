// null in JavaScript is a primitive value representing the intentional 
// absence of any object value. It is used to indicate that a variable 
// explicitly has "no value" or is "empty."

let a = {
    "name" : "Ram"
}

console.log(a.city) // undefined
// Type : 
console.log(typeof null); // "object" (its a bug in js)

//Value:
// null represents "no value" or "empty value."
// It is different from undefined, which indicates a variable has been declared but not assigned a value.

// Explicit Assignment:
// null must be explicitly assigned to a variable to represent the absence of value.
let x = null;

// Falsy Value:

// null is a falsy value in JavaScript, meaning it evaluates to false in Boolean contexts.
if(!null) {
    console.log("true") // true
} else {
    console.log("false")
}

// Common use cases of null

// 1. Resetting or Clearing a value
let data = { name: "Alice" };
data = null; // Clear the reference

// 2. Explicit Absence of a Value in APIs:
//null is commonly used in APIs to denote missing or empty values.
const response = { data: null, error: "No data available" };

// Comparision Operators with null
// null is loosely equal to undefined
console.log(null == undefined) // true
// null is not strictly equal to undefined
console.log(null === undefined) // false (because type difference null != undefined)
// when compared with numbers null is converted zero (0)
console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// Behavior in JSON:
// null is valid in JSON and can be serialized/deserialized without issues.
const obj = { key: null };
console.log(JSON.stringify(obj)); // '{"key":null}'

//Not iterable
// const val = null;
// console.log(val.length) // cannot read the properties of null

console.log(null != undefined) // false

console.log(1 + null) // 1 (for mathematical operations null converted to zero)
console.log(1 + undefined) // NaN 

console.log(null == null) // true
console.log(null === null) // true