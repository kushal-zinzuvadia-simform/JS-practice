// 11. Count Vowels:
// Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

let inputString = "Kushal Zinzuvadia";

let countVowels = (inputString) => {
    return inputString.toLowerCase().split("").reduce((count, currentValue) => {
        if (
            currentValue === 'a' ||
            currentValue === 'e' ||
            currentValue === 'i' ||
            currentValue === 'o' ||
            currentValue === 'u'
        ) {
            count++;
        }
        return count;
    }, 0);
}

console.log(countVowels(inputString));