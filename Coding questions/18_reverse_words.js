// 18. Reverse Words:
// Write a function that reverses the words in a sentence. For example, "Hello World" should become "World Hello."

let reverseWords = (inputArray) => {
  inputArray = inputArray.split(" ");

  for (let i = 0; i < inputArray.length / 2; i++) {
    let temp = inputArray[inputArray.length - 1 - i];
    inputArray[inputArray.length - 1 - i] = inputArray[i];
    inputArray[i] = temp;
  }

  return inputArray.join(" ");
};

console.log(reverseWords("Hello world my name is Kushal"));
