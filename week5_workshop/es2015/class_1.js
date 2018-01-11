/*
 * In ES2015, classes provide constructors, static and instance methods, 
 * inheritance, and the ability to extend a class by another class.
 * Best of all, you don’t have to call classes “functions” anymore.
 */

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var people = new Person('Zhang', 'Zhe');
