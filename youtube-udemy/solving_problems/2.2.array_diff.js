/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(arrA, arrB) {
  return arrA.filter((item) => !arrB.includes(item));
}

// console.log(arrayDif([1, 2, 2], [2])); // ==> [1]
console.log(arrayDiff([1, 3, 4, 2, 6, 1, 4, 2], [1, 2])); // ==> [3,4,6,4]

function arrayDiffReduce(arrA, arrB) {
  return arrA.reduce((acc, curr) => {
    if (arrB.indexOf(curr) === -1) acc.push(curr);
    return acc;
  }, []);
}
console.log(arrayDiffReduce([1, 3, 4, 2, 6, 1, 4, 2], [1, 2])); // ==> [3,4,6,4]

function arrayDiffFreq(arrA, arrB) {
  const freqObj = Object.fromEntries(arrB.map((x) => [x, true]));
  return arrA.filter((item) => !freqObj[item]);
}

console.log(arrayDiffFreq([1, 3, 4, 2, 6, 1, 4, 2], [1, 2])); // ==> [3,4,6,4]
