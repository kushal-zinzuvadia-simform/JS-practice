// 21. Smallest and Largest Numbers:
// Write a function that takes an array of numbers and returns an array with the smallest and largest numbers.

var minMaxElement = (input) => {
    return [Math.min(...input), Math.max(...input)];
};

console.log(minMaxElement([1, 4, 5, 1, 2, 0, -1]));
