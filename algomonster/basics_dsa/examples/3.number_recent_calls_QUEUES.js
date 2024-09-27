/**
 * Design a RecentCounter class that tracks the number of requests received 
 * within a specific time frame. The time frame in question is the last 
 * 3000 milliseconds, which equates to the last 3 seconds. This can be 
 * likened to monitoring network traffic, where you're interested in 
 * understanding the number of events or requests that have occurred 
 * in a sliding window of time for performance analysis or rate limiting.
 * 
 * The class should support two operations:
 * 
 * - RecentCounter() is the constructor that initializes the counter. 
 * When a RecentCounter object is created, it starts with zero recent requests.
 * 
 * -ping(int t) is a method that is called each time a new request is received. 
 * The request comes with a timestamp t (in milliseconds), which is strictly 
 * increasing with each call. The purpose of ping is to add the new request 
 * and then return the count of all recent requests within the last 3000 
 * milliseconds, which is the time range from t - 3000 to t, inclusive of 
 * both ends of the interval.

 */

class RecentCounter {
  constructor() {
    this.recentPings = [];
  }

  ping(t) {
    this.recentPings.push(t);

    while (this.recentPings.length > 0 && this.recentPings[0] < t - 3000) {
      this.recentPings.shift();
    }

    return this.recentPings.length;
  }
}

const rc = new RecentCounter();

console.log(rc.ping(100));
console.log(rc.ping(4000));
console.log(rc.ping(8000));
console.log(rc.ping(3000));
console.log(rc.ping(1000));
console.log(rc.ping(100));
