
// Check Even or Odd
let num = 7; // Change number to test
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}
// Reverse a String
let str = "hi";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
}
console.log("Original string: " + str);
console.log("Reversed string: " + reversedStr);
// Largest Number in Array
let numbers = [3, 7, 2, 9, 5];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest number in array: " + largest);

// Factorial of a Number
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log("Factorial of " + n + " is " + factorial);
// Check Palindrome
let word = "hi";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word[i];
}
if (word === reversedWord) {
    console.log(word + " is a Palindrome");
} else {
    console.log(word + " is Not a Palindrome");
}

// Count Vowels in a String
let text = "hi";
let vowelCount = 0;
for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount = vowelCount + 1;
    }
}
console.log("Number of vowels in the string: " + vowelCount);