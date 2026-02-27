// main

// Create a user object and update a property


let user = {
    name: "Sneha",
    age: 22,
    city: "Chidambaram"
};

console.log("Before update:", user);


user.age = 23;

console.log("After update:", user);


// Clone an object using spread operator


let originalUser = {
    name: "Sneha",
    age: 23
};


let clonedUser = { ...originalUser };


clonedUser.name = "thaslima";

console.log("Original User:", originalUser);
console.log("Cloned User:", clonedUser);


// Freeze an object


const frozenUser = {
    name: "Sneha",
    age: 23
};

Object.freeze(frozenUser);

console.log("Before mutation attempt:", frozenUser);


frozenUser.age = 23;      
frozenUser.city = "Chidambaram"; 

console.log("After mutation attempt:", frozenUser);


// Deep copy an object


let nestedUser = {
    name: "Sneha",
    address: {
        city: "Chidambaram",
        state: "Tamil Nadu"
    }
};


function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let copiedUser = deepCopy(nestedUser);


copiedUser.address.city = "Chennai";

console.log("Original Nested User:", nestedUser);
console.log("Copied User after change:", copiedUser);