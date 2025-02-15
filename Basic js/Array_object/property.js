// Initialize an array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 1. length - Returns the number of elements in an array
console.log("Array Length:", arr.length);

// 2. constructor - Returns the function that created the array
console.log("Array Constructor:", arr.constructor);

// 3. prototype - Adding a new method to all arrays
Array.prototype.newMethod = function () {
    return "This is a custom method for all arrays!";
};
console.log("Calling newMethod():", arr.newMethod());

// 4. Array.isArray() - Checks if a variable is an array
console.log("Is arr an array?", Array.isArray(arr));

// 5. toString() - Converts an array into a string
console.log("Array as String:", arr.toString());

// 6. valueOf() - Returns the original array
console.log("Array valueOf():", arr.valueOf());
