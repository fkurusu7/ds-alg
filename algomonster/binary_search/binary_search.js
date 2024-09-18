function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 2)); // 1
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 4
//                 [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 10)); // -1
