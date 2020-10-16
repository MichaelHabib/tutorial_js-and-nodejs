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

/* ************************************************************
* Function Definition & Arguments
* */
function my_func_1(arg1, arg2) {
    return arguments;

}

dd(my_func_1('param1', 'param2', 'param3!!'));
// Returns '[Arguments] { '0': 'param1', '1': 'param2', '2': 'param3!!' }'
// Which is the value of the 'arguments' object containing all passes parameters.


let my_func_2 = function (arg1, arg2) {
    return arguments;

}
dd(my_func_2('param1', 'param2', 'param3!!'));
// Returns '[Arguments] { '0': 'param1', '1': 'param2', '2': 'param3!!' }'
// Which is the value of the 'arguments' object containing all passes parameters.


let my_func_3 = (arg1, arg2) => {
    return arguments;

}
// dd(my_func_3());
// SHOULD Return undefined.
// ToDo: Why does this return an Argument object when executed in nodejs / terminal?


/* ************************************************************
* Function Instances & Scope with Constructor Functions Pattern
* */
function My_func_template1(arg1) {
    this.arg1 = arg1;

    return this;
    // 'this' refers to an instance of this function/object when created with the 'new' keyword.

}

My_func_template1.property_1 = 'prop 1 value';
// This will NOT work, a property can not be assigned directly to a function. Object.prototype must be used.

My_func_template1.prototype.set_property_2 = function (value) {
    this.property_2 = value;
};
// Adding properties to the object using 'prototype'

let my_func_template1_instance1 = new My_func_template1('param1');
// Creating a new instance using the function constructor.

my_func_template1_instance1.set_property_2('prop 2 value');

dd(my_func_template1_instance1)

// Returns 'My_func_template1 { arg1: 'param1', property_2: 'prop 2 value' }'

