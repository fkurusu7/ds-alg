/**
 * Given an array of integers citations where citations[i] is
 * the number of citations a researcher received for their
 * ith paper, return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia:
 *    The h-index is defined as the maximum value of h such
 *    that the given researcher has published at least h
 *    papers that have each been cited at least h times.
 *
 * Example 1:
 * Input: citations = [3,0,6,1,5]
 * Output: 3
 * Explanation: [3,0,6,1,5] means the researcher has 5
 * papers in total and each of them had received
 * 3, 0, 6, 1, 5 citations respectively.
 * Since the researcher has 3 papers with at least 3
 * citations each and the remaining two with no more
 * than 3 citations each, their h-index is 3.
 *
 * Example 2:
 * Input: citations = [1,3,1]
 * Output: 1
 */

const hIndex = function (citations) {
  citations = citations.sort((a, b) => b - a);
  let hIndexResult = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      hIndexResult = i + 1;
    }
  }

  return hIndexResult;
};

let testCases = new Map();
testCases.set(3, [3, 0, 6, 1, 5]);
testCases.set(5, [3, 0, 6, 1, 5, 4, 7, 9, 10, 11]);
testCases.set(1, [1, 3, 1]);
testCases.set(0, []);

for (const [hIndexKey, citations] of testCases) {
  console.log(
    `Should return ${hIndexKey}: ${hIndex(citations)} - ${
      hIndex(citations) === hIndexKey
    }`
  );
}

function hIndexAlt(citations) {
  const citationsLength = citations.length;
  const count = Array(citationsLength + 1).fill(0);

  for (let i = 0; i < citationsLength; i++) {
    count[Math.min(citationsLength, citations[i])]++;
  }
  console.log(count);
  console.log(citations);

  let total = 0;
  for (let i = citationsLength; i >= 0; i--) {
    console.log(i);
    console.log(total);

    total += count[i];
    console.log(total);
    if (total >= i) {
      return i;
    }
  }

  return 0;
}

console.log(hIndexAlt([3, 0, 6, 1, 5]));
