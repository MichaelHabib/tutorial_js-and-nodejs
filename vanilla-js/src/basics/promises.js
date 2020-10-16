/*
* ************************************************************
* both this_line() and dd() functions are copied from MH debugdump module,
* to make this file standalone and usable without dependencies .
* */

function this_line(stack_item_index = 2, show_filepath = true) {
    // const e = new Error();
    try {
        throw Error()
    } catch (err) {
        var e = err;
    }
    const split_error_stack = e.stack.split("\n");
    const find_index_of_line_with_dd = split_error_stack.findIndex((item, index) => {
        return item.indexOf('at dd') >= 0;
    });
    const correct_filepath_error_stack_item_index = find_index_of_line_with_dd + 1;


    let message = ''

    message += split_error_stack[correct_filepath_error_stack_item_index];
    return message;

    // broken regex due to error inside Promise functions returning a different structure for 'e.stack'
    // const regex = /\((.*):(\d+):(\d+)\)$/
    // const match = regex.exec(split_error_stack[correct_filepath_error_stack_item_index]);
    // if (show_filepath) {
    //     message += match[1] + ' : ';
    // }
    // message += '' + match[2] + ":" + match[3];
    // return message;
}

var dd_enabled = true;
// const dd = function (message, stack_item_index = 2, show_filepath = true) {
//     if (dd_enabled === false) {
//         return;
//     }
//     console.log(message);
//     console.log('|_ ' + this_line(stack_item_index, show_filepath));
//
// }

function easy_dd() {
    this.stack_item_index = 3;
    this.show_filepath = true;

    this.dd = (message) => {
        console.log(message);
        console.log('|_ ' + this_line(this.stack_item_index, this.show_filepath));
    }
    this.set_stack_item_index = (i) => {
        this.stack_item_index = i;
    };
    return this;
}

let custom_easy_dd = new easy_dd();
custom_easy_dd.set_stack_item_index(3)
const dd = custom_easy_dd.dd;


/*
* ************************************************************
* * Start of Vanilla JS Basics - Promises Tutorial
* ************************************************************
 * */

let my_promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done"), 1000);

});
my_promise
    .then((result) => {
        dd(result);
    })
    .catch((e) => {
        dd(e);
    });
