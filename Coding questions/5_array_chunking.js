// 5. Array Chunking:
// Write a function that takes an array and a chunk size as arguments and splits the array into chunks of the specified size.

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chunkSize = 4;

function arrayChunk(inputArray, chunkSize) {
    let result = [];

    if (chunkSize < 1)
        return "Enter valid chunk size";

    for (let i = 0; i < inputArray.length; i += chunkSize) {
        result.push(inputArray.slice(i, i + chunkSize));
    }
    return result;
}

console.log(arrayChunk(inputArray, chunkSize));