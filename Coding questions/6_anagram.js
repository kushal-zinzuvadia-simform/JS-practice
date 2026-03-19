// 6. Anagram Detection:
// Write a function that checks if two words are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another.

let input1 = "listen";
let input2 = "silent";

const checkAnagram = (input1, input2) => {
    if (input1.length !== input2.length) return false;

    const map = new Map();

    for (const char of input1) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of input2) {
        if (!map.has(char))
            return false;

        map.set(char, map.get(char) - 1);
    }

    for (const value of map.values()) {
        if (value !== 0)
            return false;
    }

    return true;
};

console.log(checkAnagram(input1, input2));
