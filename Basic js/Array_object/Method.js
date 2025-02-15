// Initialize an array
let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// 1. push() - Adds an element at the end
arr.push(60);
console.log("After push(60):", arr);

// 2. pop() - Removes the last element
arr.pop();
console.log("After pop():", arr);

// 3. shift() - Removes the first element
arr.shift();
console.log("After shift():", arr);

// 4. unshift() - Adds an element at the beginning
arr.unshift(5);
console.log("After unshift(5):", arr);

// 5. concat() - Merges two arrays
let newArr = arr.concat([70, 80]);
console.log("After concat([70, 80]):", newArr);

// 6. slice() - Extracts part of an array
let slicedArr = arr.slice(1, 3);
console.log("After slice(1,3):", slicedArr);

// 7. splice() - Adds or removes elements
arr.splice(2, 1, 100);
console.log("After splice(2,1,100):", arr);

// 8. indexOf() - Returns index of an element
console.log("Index of 30:", arr.indexOf(30));

// 9. includes() - Checks if an element exists
console.log("Includes 20?", arr.includes(20));
console.log("Includes 50?", arr.includes(50));

// 10. map() - Creates a new array by applying a function
let doubled = arr.map(num => num * 2);
console.log("After map(num * 2):", doubled);

// 11. filter() - Filters elements based on a condition
let filtered = arr.filter(num => num > 20);
console.log("After filter(num > 20):", filtered);

// 12. reduce() - Reduces the array to a single value
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("After reduce(sum):", sum);
