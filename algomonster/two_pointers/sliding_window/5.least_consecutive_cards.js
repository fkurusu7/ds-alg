/** Least Consecutive Cards to Match
  
  A bunch of cards is laid out in front of you in a line, where the value 
  of each card ranges from 0 to 10^6. A pair of cards is matching if they 
  have the same number value.

  Given a list of integers cards, your goal is to match a pair of cards, but 
  you can only pick up cards in a consecutive manner. What's the minimum number 
  of cards that you need to pick up to make a pair? If there are no matching 
  pairs, return -1.

  Input: cards = [3, 4, 2, 3, 4, 7], 
  Output: 4
  Explanation: arrays length of 4
    - Picking up [3, 4, 2, 3] makes a pair of 3s
    - Picking up [4, 2, 3, 4] matches two 4s
    
  Input: cards = [1, 2, 3, 1, 3, 2], 
  Output: 3
  Explanation: arrays length of 3
    - Picking up [3, 1, 3] makes a pair of 3s
*/

function leastConsecutiveCardsToMatch(cards) {
  let left = 0;
  const windowMap = new Map();
  let shortest = cards.length;

  for (let right = 0; right < cards.length; ++right) {
    const current = cards[right];
    windowMap.set(current, (windowMap.get(current) || 0) + 1);

    while (windowMap.get(current) === 2) {
      shortest = Math.min(shortest, right - left + 1);
      console.log(shortest); // 4 4 3

      console.log(windowMap);
      /*
        Map { 1: 2, 2: 1, 3: 1 } 
        Map { 1: 1, 2: 1, 3: 2 } 
        Map { 1: 1, 2: 0, 3: 2 }
       */
      windowMap.set(cards[left], windowMap.get(cards[left]) - 1);
      console.log(windowMap);
      /*
        Map { 1: 1, 2: 1, 3: 1 } 
        Map { 1: 1, 2: 0, 3: 2 } 
        Map { 1: 1, 2: 0, 3: 1 }
      */
      left++;
    }
  }
  return shortest !== cards.length ? shortest : -1;
}

// console.log(leastConsecutiveCardsToMatch([3, 4, 2, 3, 4, 7])); // ==> 4
console.log(leastConsecutiveCardsToMatch([1, 2, 3, 1, 3, 2])); // ==> 3
