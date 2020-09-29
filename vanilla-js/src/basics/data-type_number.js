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

const dd = function (message, stack_item_index = 3, show_filepath = true) {

    console.log(message);
    console.log('|_ ' + this_line(stack_item_index, show_filepath));

}
/*
* ************************************************************
* * Start of Vanilla JS Basics - Number Data Type Guide
* ************************************************************
 * */

let my_number = 148833;
let my_number_object = new Number(148833);
/*
* ************************************************************
*
* */

dd(typeof my_number); // prints "number"


dd(my_number_object); // prints "[Number: 148833]"
dd(my_number_object.valueOf()); // prints "148833"
dd(my_number_object.constructor.name) // prints "Number"
/*
* ************************************************************
*
* */

dd(my_number_object); // prints ""

/*
* ************************************************************
*
* */

/*
* ************************************************************
*
* */

/*
* ************************************************************
*
* */
/*
* ************************************************************
* Converting number to other data types.
* */
dd(my_number.toString());
dd(Number(my_number)); // prints '148833'
dd(parseInt(my_number)); // prints '148833'
dd(parseFloat(my_number)); // prints '148833'
dd(String(my_number)); // prints '"148833"'
dd(Boolean(my_number)); // prints 'true'
dd(Array(my_number)); // prints '[ <148833 empty items> ]', which is an array with many empty items counting up to 148833 !

/*
* ************************************************************
* isNumber()
* */
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}