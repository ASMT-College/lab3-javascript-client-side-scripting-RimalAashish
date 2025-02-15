// Initialize a string
let str = "JavaScript is awesome!  ";

console.log("Original String:", str);

// 1. charAt() - Returns character at a given index
console.log("Character at index 1:", str.charAt(1));

// 2. indexOf() - Finds the first occurrence of a substring
console.log("Index of 'JavaScript':", str.indexOf("JavaScript"));

// 3. lastIndexOf() - Finds the last occurrence of a substring
console.log("Last index of 'a':", str.lastIndexOf("a"));

// 4. slice() - Extracts part of a string
console.log("Slice (0,5):", str.slice(0, 5));

// 5. substring() - Similar to slice() but cannot accept negative indexes
console.log("Substring (0,5):", str.substring(0, 5));

// 6. substr() - Extracts characters from a string (deprecated but still works)
console.log("Substr (0,5):", str.substr(0, 5));

// 7. toUpperCase() - Converts to uppercase
console.log("Uppercase:", str.toUpperCase());

// 8. toLowerCase() - Converts to lowercase
console.log("Lowercase:", str.toLowerCase());

// 9. replace() - Replaces a substring
console.log("Replace 'JavaScript' with 'JS':", str.replace("JavaScript", "JS"));

// 10. split() - Splits the string into an array
console.log("Split by space:", str.split(" "));

// 11. trim() - Removes whitespace from both ends
console.log("Trimmed String:", str.trim());

// 12. concat() - Joins two strings
console.log("Concatenated String:", str.trim().concat(" Welcome!"));
