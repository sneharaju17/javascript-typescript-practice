// palindrome
let str = "hi";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
}
if (str === reversedStr) {
    console.log(str + " is a Palindrome");
} else {
    console.log(str + " is Not a Palindrome");
}