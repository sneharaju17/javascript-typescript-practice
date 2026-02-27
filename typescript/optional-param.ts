// optional param
function greet(name: string, message?: string): string {
    if (message) {
        return message + " " + name;
    }
    return "hi " + name;
}
console.log(greet("Sneha"));
console.log(greet("Sneha", "Welcome"));
export{};