/**
 * Design a simple parking system for a parking lot with three different
 * types of parking spaces: big, medium, and small. Each type of parking
 * space has a fixed number of slots that can be occupied by cars of that
 * specific size.
 *
 * The parking system needs to be able to handle two operations:
 *  - Initializing the parking system with the number of slots
 *    for each type of parking space.
 *  - Adding a car to the parking lot, which is subject to there
 *    being an available slot for the car's type.
 *
 * When a car tries to park, the parking system checks if there is an available
 * slot for that particular size of the car. If an appropriate slot is available,
 * the car parks (i.e., the count of available slots of that type reduces by one),
 * and the system returns true. If no slot is available for that car's type,
 * the system returns false.
 */

class ParkingSystem {
  // 1 - small, 2 - medium, 3 - big
  constructor(qtySmall, qtyMedium, qtyBig) {
    this.counter = [0, qtySmall, qtyMedium, qtyBig];
  }

  addCar(carType) {
    if (this.counter[carType] > 0) {
      this.counter[carType] -= 1;
      return true;
    }
    return false;
  }
}

const parking = new ParkingSystem(3, 5, 2);
console.log(parking.addCar(3)); // true
console.log(parking.addCar(3)); // true
console.log(parking.addCar(3)); // false

console.log(parking.addCar(2)); // true
console.log(parking.addCar(2)); // true
console.log(parking.addCar(2)); // true
console.log(parking.addCar(2)); // true
console.log(parking.addCar(2)); // true

console.log(parking.addCar(1)); // true
console.log(parking.addCar(1)); // true
console.log(parking.addCar(1)); // true
console.log(parking.addCar(1)); // flase
