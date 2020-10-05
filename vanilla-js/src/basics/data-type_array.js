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

dd(['string', 3, ['another array']]);
// Returns '[ 'string', 3, [ 'another array' ] ]'. Array items can be of any type.

let my_array;

my_array = ['a', 'b', 'c'];
dd(my_array[0]);
// Returns '"a"', Arrays are zero indexed.


/*
* ************************************************************
* Array Transformation
* */
dd(['this', 'array', 'has been', 'joined'].join(' '));
// Returns '"this array has been joined"' .

dd(['join', 'with', 'dashes'].join('-'));
// Returns '"join-with-dashes"'.

my_array = ['a', 'b', 'c'];
my_array.push('add one more !')
dd(my_array);
// Returns '[ 'a', 'b', 'c', 'add one more !' ]', after adding one more item to the end of the array.

my_array = ['x', 'y', 'z-the-last'];
dd(my_array.pop());
// Returns '"z-the-last"', the last item in the array.


/*
* ************************************************************
* Checks & Validation
* */

dd(typeof ['a', 'b']);
// Returns 'object'


dd(Array.isArray(['a', 'b']));
// Returns 'true'