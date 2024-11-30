let dragon = (name, size, element) =>
  name + " is a " + size + " dragon that breaths " + element + "!";

console.log(dragon("mish", "tiny", "cupcakes"));

// CURRYING
let dragonCurr = (name) => (size) => (element) =>
  name + " is a " + size + " dragon that breaths " + element + "!";

console.log(dragonCurr("fluffy")("large")("popsicles"));
