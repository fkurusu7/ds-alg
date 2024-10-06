/** Newspapers
 *
 * You've begun your new job to organize newspapers. Each morning, you are
 * to separate the newspapers into smaller piles and assign each pile to a
 * co-worker. This way, your co-workers can read through the newspapers
 * and examine their contents simultaneously.
 *
 * Each newspaper is marked with a read time to finish all its contents.
 * A worker can read one newspaper at a time, and, when they finish one,
 * they can start reading the next. Your goal is to minimize the amount
 * of time needed for your co-workers to finish all newspapers. Additionally,
 * the newspapers came in a particular order, and you must not disarrange
 * the original ordering when distributing the newspapers. In other words,
 * you cannot pick and choose newspapers randomly from the whole pile to
 * assign to a co-worker, but rather you must take a subsection of
 * consecutive newspapers from the whole pile.
 *
 * What is the minimum amount of time it would take to have your coworkers
 * go through all the newspapers?
 * That is, if you optimize the distribution of newspapers,
 * what is the longest reading time among all piles?
 *
 * Examples
 *
 * Example 1
 * Input: newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
 * Output: 18
 * Explanation:
 *    Assign first 3 newspapers to one coworker then assign the
 * rest to another. The time it takes for the first 3 newspapers
 * is 7 + 2 + 5 = 14 and for the last 2 is 10 + 8 = 18.
 *
 * Example 2
 * Input: newspapers_read_times = [2,3,5,7], num_coworkers = 3
 * Output: 7
 * Explanation:
 *    Assign [2, 3], [5], and [7] separately to workers.
 *    The minimum time is 7.
 */

function newspapersSplit(newspapersReadTimes, numCoworkers) {
  let low = Math.max(...newspapersReadTimes);
  let high = newspapersReadTimes.reduce((acc, sum) => acc + sum, 0);
  console.log(low, high);
  let result = -1;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    console.log(mid);
    if (feasible(newspapersReadTimes, numCoworkers, mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

function feasible(newspapersReadTimes, numCoworkers, limit) {
  let time = 0;
  let numWorkers = 0;
  for (const readTime of newspapersReadTimes) {
    if (time + readTime > limit) {
      time = 0;
      numWorkers += 1;
    }
    time += readTime;
  }
  if (time !== 0) {
    numWorkers += 1;
  }
  console.log(numWorkers, time);
  return numWorkers <= numCoworkers;
}

/**
 * The feasible function is used to determine if it is possible for a given
 * number of coworkers to read through a list of newspapers within certain
 * time limits.
 *
 * The function takes the following parameters:
 *    newspapersReadTimes: an array containing integers representing the
 *      time it takes each coworker to read a newspaper.
 *    numCoworkers: an integer representing the number of coworkers you
 *      have to complete the reading task.
 *    limit: an integer representing the time limit each coworker has
 *      for reading newspapers.
 *
 * The function works with the following algorithm:
 *
 * Initialize two variables:
 *    - time, which will track the cumulative reading time of the current coworker,
 *    - numWorkers, which will track the total number of coworkers required as the
 *      newspapers are distributed among them for reading.
 *
 * Iterate over each readTime in the newspapersReadTimes collection:
 *
 * a. First, check if adding the current readTime to the cumulative time would
 * exceed the limit. If so, this means the current coworker has reached their
 * time limit and cannot read this newspaper.
 *
 * b. If the limit is exceeded, reset time to 0 and increment numWorkers by 1.
 * This simulates handing the current paper to the next coworker.
 *
 * c. Add the readTime for the current newspaper to the time. If the limit was exceeded in the previous step, this is the first newspaper for the new coworker. If not, it's an additional newspaper for the current coworker.
 *
 * After the loop, there's a final check: if time is not 0, it means that the last coworker still has some time left and didn’t reach their limit, so they are counted as an additional worker by incrementing numWorkers.
 *
 * The function ends by comparing the numWorkers required to the numCoworkers available with the <= operator. The function returns a boolean indicating whether or not the number of required workers is less than or equal to the number of available coworkers (true if it is possible and false otherwise).
 *
 * This function can be helpful to divide labor efficiently while ensuring no coworker is overloaded according to a prescribed limit. It is a kind of load balancing problem often encountered in computer science and operations research.
 */

console.log(newspapersSplit([2, 3, 5, 7], 3));
