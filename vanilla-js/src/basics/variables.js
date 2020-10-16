'use strict';

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
let my_array = ['item1', 'item2'];
let my_object = {
    propA: 'value of property A',
    propB: ['object properties can be of any value']
}
let my_null = null
let my_undefined;

/* ************************************************************
* Variable Scopes
* */

function scope_of_var() {
    var func_var_1 = 'func VAR 1 initial value ... ';

    if (func_var_1) {
        var func_var_1 = 'func VAR 1 NEW value';
        var func_var_2 = 'func VAR 2 initial value';

    }
    dd(func_var_1)
    // Returns 'func VAR 1 NEW value'. 'var' declaration inside the 'if' block assigns the variable to the surrounding scope and NOT the block scope.

    dd(func_var_2)
    // Returns 'func VAR 1 initial value'. 'var' declaration inside the 'if' block assigns the variable to the surrounding scope and NOT the block scope. This makes 'func_var_2' accessible outside the 'if' block.

};
scope_of_var();


function scope_of_let() {
    let func_let_1 = 'func let 1 initial value ... ';
    let func_let_2 = 'func let 2 initial value';

    if (func_let_1) {

       try{
           dd(func_let_1)
       }catch (e){
           dd('failed to access func_let_1 before initialization ... no hoisting!')
       }

        let func_let_1 = 'func let 1 initial value for the new variable!';
        dd(func_let_1)
        // returns the new value. Re-declaring 'func_let_1' here with the 'let' keyword created a new variable within the surrounding block scope, leaving the function scope untouched.

        func_let_2 = 'func let 2 NEW value';
        dd(func_let_2)
        // Returns the new value AND changes the value of the 'func_let_2' at the function scope.

    }
    dd(func_let_1)
    // Returns the initial value, unchanged by the variable declaration inside the if block.

    dd(func_let_2)
    // Returns 'func let 1 initial value'. 'let' declaration inside the 'if' block assigns the variable to the surrounding scope and NOT the block scope. This makes 'func_let_2' accessible outside the 'if' block.

};
scope_of_let();