// main

// Scope difference between var, let, const
function testScope() {
    if (true) {
        var x = "100";      
        let y = "200";      
        const z = "300";  
        console.log("Inside block:");
        console.log("x =", x); 
        console.log("y =", y); 
        console.log("z =", z); 
    }

    console.log("Outside block:");
    console.log("x =", x); 
}

testScope();

// Demonstrating block scope using let
console.log("\n=== Block scope with let ===");
let a = 10; 

{
    let a = 20; 
    console.log("Inside block, a =", a); 
}
console.log("Outside block, a =", a); 

// Const object mutation
console.log("\n=== Const object mutation ===");
const person = {
    name: "Sneha",
    age: 22
};
console.log("Before mutation:", person);
person.age = 23;
person.city = "Chidambaram";
console.log("After mutation:", person);