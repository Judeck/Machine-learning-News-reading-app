/*
 * Inheritance
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Extends
class PetOwner extends Person {
  constructor(firstName, lastName, pets) {
    super(firstName, lastName);
    this.pets = pets;
  }
}

var people = new PetOwner('Zhang', 'Zhe', ['haha']);
