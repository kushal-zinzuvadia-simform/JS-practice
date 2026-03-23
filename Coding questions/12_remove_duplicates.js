// 12. Remove Duplicates:
// Write a function that takes an array of numbers and returns a new array with duplicates removed.

const removeDuplicates = (arr) => {
    return arr.reduce((unique, item) => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
        return unique;
    }, []);
};

let inputArray = [1, 2, 2, 3, 4, 5, 5];
console.log(removeDuplicates(inputArray));