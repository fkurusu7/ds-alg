/** QUESTION 1
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions
 * after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first
 * bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version
 * is bad. Implement a function to find the first bad version.
 * You should minimize the number of calls to the API.
 *
 * Example 1:
 * Input: n = 5, bad = 4
 * Output: 4
 * Explanation:
 *    call isBadVersion(3) -> false
 *    call isBadVersion(5) -> true
 *    call isBadVersion(4) -> true
 * Then 4 is the first bad version.
 *
 * Example 2:
 * Input: n = 1, bad = 1
 * Output: 1
 *
 * Constraints: 1 <= bad <= n <= 231 - 1
 */

// Mock API calls with fixed params
function isBadVersion(version, n) {
  if (version === 6 && n === 7) return true;
  if (version === 4 && n === 5) return true;
  if (version === 1 && n === 1) return true;
  return false;
}

function firstBadVersion(n) {
  let left = 1;
  let right = n;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid, n)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

console.log(firstBadVersion(5)); // ==> 4
console.log(firstBadVersion(7)); // ==> 6
console.log(firstBadVersion(1)); // ==> 1

/**
 * Intuitively, we know that the product versions is a sequence of good versions,
 * followed by a group of bad versions. This means that we are looking for the
 * first index which isBadVersion(ans) returns true. Therefore, we must update
 * the answer when we find a smaller version that is bad, repeat until we
 * find the smallest.
 */
