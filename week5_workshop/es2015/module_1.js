/*
 * ES5 - CommonJS
 * CommonJS is a project with the goal of specifying an ecosystem 
 * for JavaScript outside the browser (like Node.js).
 * The CommonJS Modules/1.1 spec standardized these scoped variables: 
 * require, exports, and module. 
 */


// package/lib is a dependency we require
var lib = require( "package/lib" );

// behaviour for our module
function foo(){
    lib.log( "hello world!" );
}

// export (expose) foo to other modules
exports.foo = foo;