// Initialize a string
let str = "Hello, JavaScript!";

console.log("Original String:", str);

// 1. length - Returns the number of characters in a string
console.log("String Length:", str.length);

// 2. constructor - Returns the constructor function that created the string
console.log("String Constructor:", str.constructor);

// 3. prototype - Adding a new method to all strings
String.prototype.newMethod = function () {
    return "This is a custom method for all strings!";
};
console.log("Calling newMethod():", str.newMethod());

// 4. valueOf() - Returns the primitive value of a string object
console.log("Value Of String:", str.valueOf());

// 5. toString() - Converts the string object into a string primitive
console.log("String toString():", str.toString());
