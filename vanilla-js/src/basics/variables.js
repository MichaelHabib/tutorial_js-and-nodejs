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
* * Start of Vanilla JS Basics - Variables Tutorial
* ************************************************************
 * */
var my_var_1 = 'value of var 1';
let my_let_1 = 'value of let 1';
const my_const_1 = 'value of const 1';

/*
* Variable Data Types
* */

let my_string = 'this is a string';
let my_number = 2333;
let my_array = ['item1','item2'];
let my_object = {
    propA: 'value of property A',
    propB: ['object properties can be of any value']
}
let my_null = null
let my_undefined;

/*
* Variable Scopes
* */