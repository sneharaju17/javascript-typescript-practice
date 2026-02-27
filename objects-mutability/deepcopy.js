// deepcopy
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