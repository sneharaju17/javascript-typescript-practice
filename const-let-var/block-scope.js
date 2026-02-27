// block scope
let a = 10; 

{
    let a = 20; 
    console.log("Inside block, a =", a); 
}

console.log("Outside block, a =", a); 