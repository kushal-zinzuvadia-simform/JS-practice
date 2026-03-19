// 7. Title Case a Sentence: Write a function that converts the first letter of each word in a sentence to uppercase.

let input = "hi! my name is Kushal. it is raining outside. bye";

const titleCase = (input) => {
    return input
        .toLowerCase()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
};

console.log(titleCase(input));

