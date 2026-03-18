// 2. Palindrome Check:
// Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward.

let inputString = "racecar";
console.log(inputString);

function palindromeCheck(inputString) {
    let i = 0, j = inputString.length - 1;
    while (i < j) {
        if (inputString[i] == inputString[j]) {
            i++;
            j--;
        } else {
            return false;
        }
    }

    return true;
}

palindromeCheck(inputString) ? console.log("Palindrome") : console.log("Not Palindrome");