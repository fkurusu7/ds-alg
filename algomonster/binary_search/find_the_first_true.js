function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);

    if (arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}

console.log(findBoundary([false, false, false, true, true])); // 3
// console.log(findBoundary([false, false, true, true, true])); // 2
