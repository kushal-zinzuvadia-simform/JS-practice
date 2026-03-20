// 8. Find the Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

let input = [10, 1, 2, 4, 5, 3, 7, 0, 9, 6];

function findMissing(input) {
    let sum = 0;
    input.forEach(element => {
        sum += element;
    });
    return ((input.length) * (input.length + 1) / 2) - sum;
}

console.log(findMissing(input));