console.log("*****************************************");
console.log("************ DATA STRUCTURES ************");
console.log("*****************************************");

console.log(`** DS are:
    - collections of values, 
    - the relationships among them,
    - the functions or operations that can be applied to the data`);

console.log(` Different DS excel at different things.
        Some are highly specialized, while others (arrays)
        are more generally used.`);

console.log(`******************************`);
console.log(`JavaScript ES2015 class syntax`);
console.log(`******************************`);

console.log("-- What is a CLASS?");
console.log(`a Blueprint for creating objects with 
    pre-defined properties and methods`);

console.log("-- INSTANCE Methods");
console.log(
  "-- Provide functionality that pertains to a single instance of a class."
);
console.log("-- STATIC (class) Methods");
console.log(`-- Static methods are called without instantiating 
    their class and cannot be called through a class instance.
    And they are often used to create utility functions for an app.`);

console.log("-- THIS ---");
console.log(`-- Inside of all instance methods and constructor,
  the keywordTHIS refers to the object created from that class (instance).`);

console.log("****** Implement DS as CLASSES!!!");

console.log("*****************************************");
console.log("EXAMPLES on CLASSES");
console.log("*****************************************");

class Student {
  // The method to create new objects must be called constructor
  constructor(fName, lName, year) {
    this.fName = fName;
    this.lName = lName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  static EnrollStudent() {
    return "Enrolling students";
  }

  getFullName() {
    return `This is ${this.lName}, ${this.fName}. I am in ${this.grade} grade.`;
  }

  makrLate() {
    this.tardies++;
    return `${this.fName} ${this.lName} has been late ${this.tardies} times`;
  }

  addScore(newScore) {
    this.scores.push(newScore);
    return this.scores;
  }

  getScoresAverage() {
    const sum = this.scores.reduce((acc, curr) => acc + curr, 0);
    return Number((sum / this.scores.length).toFixed(2));
  }
}

console.log(Student.EnrollStudent());
let s1 = new Student("kevin", "sanjuy", 2011);
let s2 = new Student("blue", "steel", 2012);

console.log(s1);
/**Student {
  fName: 'kevin',
  lName: 'sanjuy',
  grade: 2011,
  tardies: 0,
  scores: []
} */
console.log(s1.getFullName());
console.log(s1.addScore(3));
console.log(s1.addScore(6));
console.log(s1.addScore(9));
console.log(s1.addScore(7));
console.log(s1.getScoresAverage());

console.log(s2.getFullName());
console.log(s2.makrLate());
