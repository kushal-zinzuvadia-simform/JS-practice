// 15. Capitalize Letters:
// Write a function that takes a sentence and capitalizes the first letter of each word.

let capitalizeSentence = (input) => {
  return input
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(capitalizeSentence("my name is kushal zinzuvadia. ? 123"));

// split() + forEach() doesn’t modify the original string
// Inside forEach, word is just a copy, not updating anything
// forEach() does not return anything, it returns undefined
