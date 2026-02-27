"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// optional param
function greet(name, message) {
    if (message) {
        return message + " " + name;
    }
    return "hi " + name;
}
console.log(greet("Sneha"));
console.log(greet("Sneha", "Welcome"));
