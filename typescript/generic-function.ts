// generic function
function identity<T>(value: T): T {
    return value;
}
console.log(identity<string>("hi"));
console.log(identity<number>(100));
console.log(identity<boolean>(true));