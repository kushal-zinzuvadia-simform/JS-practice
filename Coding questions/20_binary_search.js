// 20. Binary Search:
// Implement a binary search function that takes a sorted array and a target value, returning the index of the target value in the array.

let binarySearch = (arr, key, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === key) return mid;

  if (arr[mid] > key) {
    return binarySearch(arr, key, left, mid - 1);
  } else {
    return binarySearch(arr, key, mid + 1, right);
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(arr, 10));
