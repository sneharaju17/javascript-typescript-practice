// clone
let originalUser = {
    name: "Sneha",
    age: 23
};
let clonedUser = { ...originalUser };
clonedUser.name = "thaslima";
console.log("Original User:", originalUser);
console.log("Cloned User:", clonedUser);