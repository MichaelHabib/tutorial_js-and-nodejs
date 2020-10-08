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
// Returns '"z-the-last"', removing the last item in the array.


my_array = ['a', 'b', 'c'];
dd(my_array.shift());
// Returns 'a', removing the first item from the array.


my_array = ['a', 'b', 'c'];
my_array.unshift('first-item');
dd(my_array);
// Returns '[ 'first-item', 'a', 'b', 'c' ]', adding an item to the start of the array.


my_array = ['c', 'd', 'item to remove', 'g'];
my_array.splice(2, 1, ...['e', 'f']);
dd(my_array);
// Returns '[ 'c', 'd', 'e', 'f', 'g' ]', adding "e" and "f" after the second item AFTER removing 1 item .


my_array = ['0', '1', 'a', 'b', 'c'];
my_array.splice(0,2)
dd(my_array);
// Returns '[ 'a', 'b', 'c' ]' after removing 2 items starting at array index 0


my_array = ['a', 'b', 'c'];
my_array_2 = ['d'];
my_array_merged = my_array.concat(my_array_2);
dd(my_array_merged);
// Returns '[ 'a', 'b', 'c', 'd' ]', a new array as a result of merging 2 or more arrays, leaving the original arrays untouched .


my_array = ['0', '1', 'a', 'b', 'c'];
my_array.slice(3,10)
dd(my_array.slice(3,5));
// Returns '[ 'b', 'c' ]', returning items between indexes 3-5 as a new array.




/*
* ************************************************************
* Array Sorting
* */

my_array = ['x','y','a', 'b', 'c'];
my_array.sort()
dd(my_array);
// Returns '[ 'a', 'b', 'c', 'x', 'y' ]'





/*
* ************************************************************
* Checks & Validation
* */

dd(typeof ['a', 'b']);
// Returns 'object'


dd(Array.isArray(['a', 'b']));
// Returns 'true'