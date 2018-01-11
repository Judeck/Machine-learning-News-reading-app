/*
 * Getter and setter method.
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  set middleName(string) {
    this.middleName = string;
  }
}
var people = new Person('Zhang', 'Zhe');
people.middleName = 'Ha';
people.fullName;                // "Zhang Zhe"