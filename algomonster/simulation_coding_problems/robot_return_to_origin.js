/**
 * Whether a robot, which starts at the origin (0, 0) on a 2D plane,
 * returns to its starting point after executing a series of moves. The
 * series of moves is given as a string where each character corresponds
 * to a move in one of four possible directions:
 * 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
 *
 * The task is to analyze this string and return true if the robot ends up
 * at the origin after all the moves or false otherwise. The key point is
 * to keep track of the robot's position relative to the origin, regardless
 * of how it's facing, and verify if it returns to (0, 0).
 */

function judgeCircle(moves) {
  let x = 0;
  let y = 0;

  for (const move of moves) {
    if (move === "R") {
      x++;
    } else if (move === "L") {
      x--;
    } else if (move === "U") {
      y++;
    } else if (move === "D") {
      y--;
    }
  }

  return x === 0 && y === 0;
}

console.log(judgeCircle("UDLR")); // true
console.log(judgeCircle("UDLRRD")); // false
