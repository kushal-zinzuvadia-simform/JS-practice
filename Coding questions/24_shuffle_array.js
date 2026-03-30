// 24. Shuffle Array:
// Write a function that shuffles the elements of an array randomly.

let shuffleArray = (input) => {
    let result = [];
    while (input.length) {
        let num = [Math.floor(Math.random() * input.length)];
        result.push(input[num]);
        input.splice(num, 1);
    }
    return result;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));