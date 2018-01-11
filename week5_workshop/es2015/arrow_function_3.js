/* 
 * The other benefit of using arrow functions with promises/callbacks is 
 * that it reduces the confusion surrounding the this keyword. In code with
 * multiple nested functions, it can be difficult to keep track of and
 * remember to bind the correct this context. In ES5, you can use workarounds
 * like the .bind method (which is slow) or creating a closure using  
 * var self = this;
 */


// The issue in ES5
var myObj = {
    oneFunction: function () {...},

    getAsyncData: function (callback) {
        callback();
    },

    render: function () {
        this.getAsyncData(function () {
            this.oneFunction();            // Error: Object has no method 'oneFunction'
        });
    }
};

myObj.render();