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
* * Start of Vanilla JS Basics - Functions Tutorial
* ************************************************************
 * */

/*
* Function Definition & Arguments
* */
function my_func_1(arg1, arg2) {
    return arguments;

}

dd(my_func_1('param1','param2','param3!!'));
// Returns '[Arguments] { '0': 'param1', '1': 'param2', '2': 'param3!!' }'
// Which is the value of the 'arguments' object containing all passes parameters.


let my_func_2 = function (arg1, arg2) {
    return arguments;

}
dd(my_func_2('param1','param2','param3!!'));
// Returns '[Arguments] { '0': 'param1', '1': 'param2', '2': 'param3!!' }'
// Which is the value of the 'arguments' object containing all passes parameters.


let my_func_3 = (arg1, arg2) => {
    return arguments;

}
// dd(my_func_3());
// SHOULD Return undefined.
// ToDo: Why does this return an Argument object when executed in nodejs / terminal?