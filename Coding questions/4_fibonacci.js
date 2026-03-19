// 4. Fibonacci Sequence:
// Write a function that generates the nth number in the Fibonacci sequence. The Fibonacci sequence is 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

let inputNumber = 9;

let fibonacci = (number) => {
    if (number === 1)
        return 0;
    if (number === 2)
        return 1;

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(inputNumber));