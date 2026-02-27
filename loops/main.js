// main
// Print numbers from 1 to 50 (for loop)
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// Multiplication Table
let number = 5; 
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

// Sum from 1 to N (while loop)
let N = 10;  
let sum = 0;
let i = 1;
while (i <= N) {
    sum += i;
    i++;
}
console.log("Sum from 1 to " + N + " is:", sum);

// Iterate over Object using for...in
const user = {
    name: "Sneha",
    age: 23,
    city: "Chidambaram"
};
for (let key in user) {
    console.log(key + ":", user[key]);
}

// Iterate over Array using for...of
const fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}