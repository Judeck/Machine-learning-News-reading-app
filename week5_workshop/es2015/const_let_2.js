/* 
 * let allows you to do the same as const without the single assignment constraint. 
 * It is scoped to the block level.
 */

// This is OK (foo is undefined)
let foo;

function fn() {
  let foo = "a";
  var bar = "b";

  if (true) {
    let foo = "c";
    bar = 'd';

    console.log(foo);    // print 'c'
    console.log(bar);    // print 'd'
  }
  console.log(foo);    // print 'a'
  console.log(bar);    // print 'd', 'var' is not block scoped
}
