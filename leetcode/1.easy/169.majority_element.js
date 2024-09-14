/**
 * Given an array nums of size n,
 * return the majority element.
 *
 * The majority element is the element
 * that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority
 * element always exists in the array.
 *
 * Input: nums = [3,2,3]
 * Output: 3
 */

function majorityElement(nums) {
  /* let freqMaj = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    freqMaj[key] = (freqMaj[key] || 0) + 1;
  }

  let maxValue = 0;
  let maxKey = 0;
  for (let n in freqMaj) {
    console.log(n, freqMaj[n]);

    if (freqMaj[n] > maxValue) {
      maxValue = freqMaj[n];
      maxKey = n;
    }
  }

  return maxKey; */

  let num = Math.floor(nums.length / 2);
  console.log(num);
  nums = nums.sort();
  console.log(nums);
  return nums[num];
}

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([5, 4, 3, 2, 5, 5, 3, 5]));
// console.log(majorityElement([8, 8, 8, 5, 8, 8, 8, 8, 4, 3, 2, 5, 5, 3, 5]));
console.log(majorityElement([8, 4, 3, 2, 3, 5, 4, 3, 3, 2, 1, 3]));

function majorityElementBoyerMoore(nums) {
  let count = 0;
  let candidate = null;
  console.log(candidate);

  for (const num of nums) {
    console.log(count, num);

    if (count === 0) {
      candidate = num;
      console.log(candidate);
    }
    count += num === candidate ? 1 : -1;
  }

  console.log(candidate);
  return candidate;
}

console.log(majorityElementBoyerMoore([3, 2, 3]));
console.log(majorityElementBoyerMoore([5, 4, 3, 2, 5, 5, 3, 5]));

var lengthOfLastWord = function (s) {
  let words = s.replace(/\s+/g, " ").trim().split(" ");
  console.log(words[words.length - 1].length);
  return words[words.length - 1].length;
};
lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");
