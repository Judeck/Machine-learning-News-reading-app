/*
 * Promises, have been around quite a while and are defined by 
 * a spec called Promise/A+. ES6 has adopted this spec for its 
 * Promise implementation.
 * 
 * Promises give us a way to handle asynchronous processing in
 * a more synchronous fashion.
 */

var p = new Promise(function(resolve, reject) {  
   if (/* condition */) {
      resolve(/* value */);  // fulfilled successfully
   }
   else {
      reject(/* reason */);  // error, rejected
   }
});