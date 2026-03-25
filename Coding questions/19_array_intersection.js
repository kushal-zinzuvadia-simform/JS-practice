// 19. Intersection of Two Arrays:
// Write a function that returns the intersection of two arrays, i.e., the elements that appear in both arrays.

let arrayIntersection = (arr1, arr2) => {
  let result = new Set();
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.add(arr1[i]);
    }
  }

  return result;
};

let arr1 = [1, 2, 3, 5, 7];
let arr2 = [0, 2, 4, 6, 8];

console.log(arrayIntersection(arr1, arr2));
