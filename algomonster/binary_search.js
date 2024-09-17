function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log(Math.floor((right - left) / 2));
    console.log(left + Math.floor((right - left) / 2));

    let middle = left + Math.floor((right - left) / 2);
    console.log(middle, arr[middle]);

    console.log(left);
    console.log(right);
    if (arr[middle] === target) return middle;

    if (arr[middle] > target) {
      right = middle - 1;
      console.log(right);
    } else {
      left = middle + 1;
      console.log(left);
    }
  }

  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 2)); // 1
console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 5)); // 4
//                 [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(search([1, 2, 3, 4, 5, 6, 7, 8], 10)); // -1
