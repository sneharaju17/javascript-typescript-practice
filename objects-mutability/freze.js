// freze object
const frozenUser = {
    name: "Sneha",
    age: 23
};
Object.freeze(frozenUser);
console.log("Before mutation attempt:", frozenUser);
frozenUser.age = 22; 
frozenUser.city = "Chidambaram"; 
console.log("After mutation attempt:", frozenUser);