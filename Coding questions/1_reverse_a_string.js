// 1. Reverse a String:
// Write a function that reverses a given string. For example, if the input is "hello," the output should be "olleh."

let inputString = "Kushal";
console.log(inputString);

function reverseString(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        result += inputString[inputString.length - i - 1];
    }
    return result;
}

console.log(reverseString(inputString));