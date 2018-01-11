/*
 * const allows you to declare a single assignment variable lexically bound. 
 * That just means that you can only assign once a value in a variable, scoped at the block level.
 */

// Error 1
const foo;  // SyntaxError, variable needs to be assigned to something.

// Error 2
const foo = 'hello';
foo = 'world';  // SyntaxError, variable cannot be re-assigned.


// Block scope
function fn() {
  const foo = "hello";
  if (true) {
    const foo = "world";
    console.log(foo);    // print 'world'
  }
  console.log(foo);    // print 'hello'
}