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
* * Start of Vanilla JS Basics - Classes Tutorial
* ************************************************************
 * */

class my_class_1 {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }


    get_full_message() {
        return this.message + this.name;
    }
}

dd(new my_class_1('Michael', 'say hi to ').get_full_message());
// Returns '"say hi to Michael"'.

