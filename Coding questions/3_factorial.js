// 3. Factorial Calculation:
// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

let inputNumber = 5;

let factorial = (number) => {
    let result = 1;
    while (number > 1) {
        result *= number;
        number--;
    }

    return result;
}

console.log(factorial(inputNumber));