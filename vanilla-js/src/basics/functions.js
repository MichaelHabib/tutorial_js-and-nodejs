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
* Function Definition & Arguments
* */
function my_func_1(param1, param2) {
    return arguments;

}

dd(my_func_1());
// Returns the 'arguments' objects containing all arguments.


let my_func_2 = function (param1, param2) {
    return arguments;

}
dd(my_func_2());
// Returns the 'arguments' objects containing all arguments.


let my_func_3 = (arg1, arg2, ...rest) => {
    return rest;

}
dd(my_func_3());
// Returns an array of all arguments ??
