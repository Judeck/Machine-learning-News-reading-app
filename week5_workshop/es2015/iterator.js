/*
 * ES6 supports iterator which is similar to "for ... in ..." in other languages.
 */

// ES5
// Using forEach()
var a = [1,2,3];
a.forEach(function (element) {
    console.log(element);
});

// Using a for loop
var a = [1,2,3];
for (var i = 0; i < a.length; ++i) {
    console.log(a[i]);
}


// ES6
// Behind the scenes, this will get an iterator from the array
// and loop through it, getting values from it.
for (let element of [1, 2, 3]) {
  console.log(element);
}
