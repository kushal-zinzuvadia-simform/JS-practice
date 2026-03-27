// 23. Caesar Cipher (Advanced):
// Modify your Caesar Cipher function to support both encryption and decryption.

let cipher = (input, shift) => {
    return input
        .split("")
        .map((c) => {
            let code = c.charCodeAt();
            if (code >= 65 && code <= 90) {
                let result = "A".charCodeAt();
                result += (code - 65 + shift) % 26;
                c = String.fromCharCode(result);
                return c;
            }

            if (code >= 97 && code <= 122) {
                let result = "a".charCodeAt();
                result += (code - 97 + shift) % 26;
                c = String.fromCharCode(result);
                return c;
            }

            return c;     // Keep space as it is
        })
        .join("");
};

let decipher = (input, shift) => {
    return input
        .split("")
        .map((c) => {
            let code = c.charCodeAt();
            if (code >= 65 && code <= 90) {
                let result = "A".charCodeAt();

                if (code - 65 - shift < 0) {
                    result += (code - 65 - shift) + 26;
                } else {
                    result += (code - 65 - shift);
                }

                c = String.fromCharCode(result);
                return c;
            }

            if (code >= 97 && code <= 122) {
                let result = "a".charCodeAt();

                if (code - 97 - shift < 0) {
                    result += (code - 97 - shift) + 26;
                } else {
                    result += (code - 97 - shift);
                }

                c = String.fromCharCode(result);
                return c;
            }

            return c;     // Keep space as it is
        })
        .join("");
}

console.log(cipher("Hello this is secret message by Kushal", 5));
console.log(decipher("Mjqqt ymnx nx xjhwjy rjxxflj gd Pzxmfq", 5));     // Hello this is secret message by Kushal