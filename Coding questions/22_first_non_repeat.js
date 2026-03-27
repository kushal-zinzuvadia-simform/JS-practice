// 22. First Non-Repeating Character:
// Write a function that finds the first non-repeating character in a string.

let firstNonRepeating = (inputString) => {
  // Count frequency 
  let m = new Map();
  inputString.split("").forEach(c => {
    if (m.has(c)) {
      m.set(c, m.get(c) + 1);
    } else {
      m.set(c, 1);
    }
  });

  // Iterate 
  for (const c of inputString.split("")) {
    if (m.get(c) == 1) {
      return c;
    }
  }

  return false;
};

console.log(firstNonRepeating("aabbcde"));
console.log(firstNonRepeating("abcab"));
console.log(firstNonRepeating("aabbcc"));
console.log(firstNonRepeating("aAbBABac"));