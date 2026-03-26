// 9. Caesar Cipher:
// Implement a function that takes a string and a shift value and returns a new string where each letter is shifted by the provided amount.

let cipher = (input, shift) => {
    return input
        .split("")
        .map((c) => {
            let code = c.charCodeAt();
            if (code >= 65 && code <= 90) {
                let result = "A".charCodeAt() - 1;
                result += (code - 65 + shift) % 26;
                c = String.fromCharCode(result);
                return c;
            }

            if (code >= 97 && code <= 122) {
                let result = "a".charCodeAt() - 1;
                result += (code - 97 + shift) % 26;
                c = String.fromCharCode(result);
                return c;
            }

            return c;     // Keep space as it is
        })
        .join("");
};

console.log(cipher("Hello this is secret message by Kushal", 5));