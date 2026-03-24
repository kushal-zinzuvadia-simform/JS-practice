// 16. Sum of Two:
// Write a function that takes an array of numbers and a target sum. Determine if there are two numbers in the array that add up to the target sum.

let sumOfTwo = (input, sum) => {
  input.sort();
  let left = 0;
  let right = input.length - 1;

  while (left < right && left >= 0 && right < input.length) {
    if (input[left] + input[right] == sum) {
      break;
    } else if (input[left] + input[right] < sum) {
      left++;
    } else {
      right--;
    }
  }

  return input[left] + input[right] == sum
    ? new Array(input[left], input[right])
    : false;
};

console.log(sumOfTwo([2, 7, 3, 4, 9, 6, 1, 8, 5], 12));
