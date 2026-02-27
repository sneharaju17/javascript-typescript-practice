// for in objects
const user = {
    name: "Sneha",
    age: 23,
    city: "Chidambaram"
};

for (let key in user) {
    console.log(key + ":", user[key]);
}