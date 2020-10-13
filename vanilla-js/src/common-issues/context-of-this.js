
/*
* ************************************************************
* The value of `this`
* Posted on :
* - https://stackoverflow.com/a/64312294/3649617
* */


let this_in_objects = {
    propA: "let's figure THIS out!",
    /*
    * Object property set to a standard function.
    * */
    propB: function () {
        return this.propA;
        // Returns the value of this_in_objects.propA as expected.
    },
    /*
    * Object property set to an arrow function (Introduced in ES6).
    * */
    propC: () => {
        return this.propA;
        // Should return 'undefined'
        // In this case, 'this' refers to the surrounding scope, which could be one of the following :
        // - 'module.exports' if the code is inside a nodejs module.
        // - 'window' if the code is executed in a browser, or 'undefined' if running in a terminal due to the lack of 'window' global variable.
    },
    /*
    * Object property set to a standard function that returns an arrow function.
    * */
    propD: function () {
        let newArrowFunction = () => {
            return this.propA;
            // Returns the value of this_in_objects.propA.
            // The first functions declaration binds 'this' to the current object
            // then the second function scope is now the 'this' of the first function.

        }
        return newArrowFunction;
    },
    /*
    * Object property set another object with 2 properties, one of which returns a standard function.
    * */
    propE: {
        propE_1: "value of propE.propE_1",
        propE_2: function () {
            return this.propE_1;
            // In this case, 'this' refers to the surrounding scope, which is the parent object 'propE'
        }
    },
    /*
    * Object property set another object with 2 properties, one of which returns an arrow function.
    * */
    propF: {
        propF_1: "value of propF.propF_1",
        propF_2: () => {
            return this.propF_1;
            // Should return 'undefined'
            // There no change in the binding of 'this', so
            // In this case, 'this' refers to the surrounding scope, which could be one of the following :
            // - 'module.exports' if the code is inside a nodejs module.
            // - 'window' if the code is executed in a browser, or 'undefined' if running in a terminal due to the lack of 'window' global variable.
        }
    },
};

console.log(this_in_objects.propB());
// Returns "let's figure THIS out!"

console.log(this_in_objects.propC());
// Returns 'undefined'

console.log(this_in_objects.propD()());
// Returns "let's figure THIS out!"
// Notice the double round brackets to call the nested anonymous functions.

console.log(this_in_objects.propE.propE_2());
// Returns "value of propE.propE_1"

console.log(this_in_objects.propF.propF_2());
// Returns 'undefined'


this_in_objects.propX = function () {
    return this.propA;
    // Returns the value of this_in_objects.propA as expected.
};
this_in_objects.propA = 'The new value of propA !';

console.log(this_in_objects.propX());
// Returns "The new value of propA !",
// even though 'propA' value was changed AFTER declaring the function,
// returning the value of 'propA' at the time of function execution, not at the time of declaration.


