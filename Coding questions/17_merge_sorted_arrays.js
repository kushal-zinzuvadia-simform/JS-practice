// 17. Merge Sorted Arrays:
// Write a function that merges two sorted arrays into a single sorted array.

let mergeSorted = (arr1, arr2) => {
  let result = new Array();
  let index1 = 0,
    index2 = 0,
    indexResult = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      result.push(arr1[index1]);
      index1++;
      indexResult++;
    } else {
      result.push(arr2[index2]);
      index2++;
      indexResult++;
    }
  }

  while (index1 < arr1.length) {
    result.push(arr1[index1]);
    index1++;
    indexResult++;
  }

  while (index2 < arr2.length) {
    result.push(arr2[index2]);
    index2++;
    indexResult++;
  }

  return result;
};

let input1 = [1, 2, 8, 10];
let input2 = [3, 5, 7, 9, 9, 10];

console.log(mergeSorted(input1, input2));
