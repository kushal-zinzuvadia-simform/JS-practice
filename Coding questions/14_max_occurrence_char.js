// 14. Max Character:
// Write a function that takes a string and returns the character that appears the most.

let maxOccurrence = (input) => {
    let m = new Map();
    input.split("").forEach(element => {                // forEach doesn't work for string, only on Array
        if(!m.has(element)){
            m.set(element, 1);
        } else {
            m.set(element, m.get(element)+1);
        }
    });

    let maxKey = null;
    let maxValue = -Infinity;

    for(const [key, value] of m){
        if(value > maxValue){
            maxValue = value;
            maxKey = key;
        }
    }

    return maxKey;
};

console.log(maxOccurrence("abbbacacb"));