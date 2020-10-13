/*
* ************************************************************
* both this_line() and dd() functions are copied from MH debugdump module,
* to make this file standalone and usable without dependencies .
* */

function this_line(stack_item_index = 2, show_filepath = true) {
    const e = new Error();
    const regex = /\((.*):(\d+):(\d+)\)$/
    const match = regex.exec(e.stack.split("\n")[stack_item_index]);
    let message = ''
    if (show_filepath) {
        message += match[1] + ' : ';
    }
    message += '' + match[2] + ":" + match[3];
    return message;
}

var dd_enabled = true;
const dd = function (message, stack_item_index = 3, show_filepath = true) {
    if (dd_enabled === false) {
        return;
    }
    console.log(message);
    console.log('|_ ' + this_line(stack_item_index, show_filepath));

}
/*
* ************************************************************
* * Start of Vanilla JS Basics - Arrays Data Type Guide
* ************************************************************
 * */
console.log('************************************************************');
dd({propA: 'value a', propB: new Array('value b')});
// Returns '{ propA: 'value a', propB: [ 'value b' ] }'. Object property value can be of any type.

let my_object, my_object_2, my_object_3;

/*
* ************************************************************
* Creating Object
* */
my_object = {
    propA: 'valueA',
    propB: new Array('valueB'),
    propC: function () {
        return this.propA + " returned by propC!";
    },
    propD: () => {
        return this.propA + " returned by propD!";
    }
};

dd(my_object);
// Returns:
// {
//     propA: 'valueA',
//     propB: [ 'value b' ],
//     propC: [Function: propC],
//     propD: [Function: propD]
// }


/*
* ************************************************************
* Accessing Object Properties
* */
dd(my_object.propA);
// Returns '"valueA"'

dd(my_object.propB);
// Returns '[ 'valueB' ]'

dd(my_object.propC());
// Returns "valueA returned by propC!"


dd(my_object.propD());
// Returns '"undefined returned by propD!"'. Arrow functions do NOT bind 'this' to the current scope, so 'this' will be the closest surrounding context. Check out vanilla-js/src/common-issues/context-of-this.js for more examples.


my_object.propE = function () {
    return this.propA + " returned by propE!";
};
dd(my_object.propE());
// Returns "valueA returned by propE!"
// my_object.propE was added to the initial object

/*
* ************************************************************
* Modifying and Transforming Objects
* */


/*
* ************************************************************
* Checking Objects and Properties
* */

