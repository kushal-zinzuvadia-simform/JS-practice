// 10. Deep Comparison:
// Write a function that compares two objects and returns true if they are deeply equivalent (have the same values for the same keys).

const user1 = {
    name: "Kushal",
    address: {
        city: "Delhi",
        area: {
            floor: 3,
            wing: 'A',
        }
    }
};

const user2 = {
    name: "Kushal",
    address: {
        city: "Delhi",
        area: {
            floor: 3,
            wing: 'B',
        }
    }
};

const deepComparison = (obj1, obj2) => {
    const keys1 = Object.getOwnPropertyNames(obj1);
    const keys2 = Object.getOwnPropertyNames(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const prop of keys1) {
        const val1 = obj1[prop];
        const val2 = obj2[prop];

        if (
            val1 !== null &&
            typeof val1 === "object" &&
            val2 !== null &&
            typeof val2 === "object"
        ) {
            if (!deepComparison(val1, val2)) return false;
        } else {
            if (val1 !== val2) return false;
        }
    }

    return true;
};

console.log(deepComparison(user1, user2));