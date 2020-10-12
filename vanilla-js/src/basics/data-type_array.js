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
console.log('************************************************************');

dd(['string', 3, ['another array']]);
// Returns '[ 'string', 3, [ 'another array' ] ]'. Array items can be of any type.

let my_array, my_array_2, my_array_3;


/*
* ************************************************************
* Accessing Array Items
* */


my_array = ['a', 'b', 'c', 'a', 'a', 'b', 'b', 'aaa', 'aaa', 'bbb'];

dd(my_array[0]);
// Returns '"a"', Arrays are zero indexed.


dd(my_array.indexOf('c'));
// Returns '2', the location of the first occurrence after searching for the specific item.

dd(my_array.indexOf('something else'));
// Returns '-1', as the item was not found.

dd(my_array.lastIndexOf('a'));
// Returns '4', the location of the last occurrence after searching for the specific item.

dd(my_array.find((item, index) => {
    return item !== 'a';
}));
// Returns '"b"', the first item that returns true for the test.

dd(my_array.findIndex((item, index) => {
    return item !== 'a';
}));
// Returns '1', the index of the first item that returns true for the test.


my_array_2 = my_array.filter((item, index) => {
    return item.indexOf('a') >= 0;
});
dd(my_array_2);
// Returns '[ 'a', 'a', 'a', 'aaa', 'aaa' ]', retuning all items that pass the test as a new array.


my_array = ['a', 'b', 'c'];

my_array.forEach((item, index) => {
    console.log(`${item} is at index ${index}`)
});
// Returns the following as a result of looping through the items one at a time.
// a is at index 0
// b is at index 1
// c is at index 2


my_array_2 = my_array.map((item, index) => {
    return item.concat(" >>");
});
dd(my_array_2);
// Returns '[ 'a >>', 'b >>', 'c >>' ]', a new array where items are the result of the returned value.


/*
* ************************************************************
* Modifying and Transforming Arrays
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
// Returns '"z-the-last"', removing then returning the last item from the array.


my_array = ['a', 'b', 'c'];
dd(my_array.shift());
// Returns 'a', removing then returning the first item from the array.


my_array = ['a', 'b', 'c'];
my_array.unshift('first-item');
dd(my_array);
// Returns '[ 'first-item', 'a', 'b', 'c' ]', adding an item to the start of the array.


my_array = ['c', 'd', 'item to remove', 'g'];
my_array.splice(2, 1, ...['e', 'f']);
dd(my_array);
// Returns '[ 'c', 'd', 'e', 'f', 'g' ]', adding "e" and "f" after the second item AFTER removing 1 item .


my_array = ['0', '1', 'a', 'b', 'c'];
my_array.splice(0, 2)
dd(my_array);
// Returns '[ 'a', 'b', 'c' ]' after removing 2 items starting at array index 0


my_array = ['a', 'b', 'c'];
my_array_2 = ['d'];
my_array_merged = my_array.concat(my_array_2);
dd(my_array_merged);
// Returns '[ 'a', 'b', 'c', 'd' ]', a new array as a result of merging 2 or more arrays, leaving the original arrays untouched .


my_array = ['0', '1', 'a', 'b', 'c'];
dd(my_array.slice(4));
// Returns '[ 'c' ]', returning items between index 4 to end of array, as a new array.

my_array = ['0', '1', 'a', 'b', 'c'];
dd(my_array.slice(3, 5));
// Returns '[ 'b', 'c' ]', returning items between indexes 3-5 as a new array.


my_array = ['0', '1', 'a', 'b', 'c'];
dd(my_array.slice(-1));
// Returns '[ 'c' ]', returning items between index -1 to end of array, as a new array. Negative number are counted from the end of an array.



my_array = ['0', '1', 'a', 'b', 'c'];
dd(my_array.join(' + '));
// Returns '"0 + 1 + a + b + c"', a string with the result of joining all elements with the specified operator. Default operator is a comma, which is used when no operator is passed in.




/*
* ************************************************************
* Sorting Arrays
* */

my_array = ['x', 'y', 'a', 'b', 'c'];
my_array.sort()
dd(my_array);
// Returns '[ 'a', 'b', 'c', 'x', 'y' ]'


/*
* ************************************************************
* Checking Arrays and Array Items
* */

dd(typeof ['a', 'b']);
// Returns 'object'

dd(['a', 'b'].constructor.name);
// Returns 'Array'

dd(Array.isArray(['a', 'b']));
// Returns 'true'


my_array = ['a', 'b', 'c', 'a', 'a', 'b', 'b', 'aaa', 'aaa', 'bbb'];

my_array_2 = my_array.every((item, index) => {
    return item.indexOf('z') === -1;
});
dd(my_array_2);
// Returns 'true', after checking that every item doe not contain a "z".

dd(my_array.includes('aaa'));
// Retuning 'true', after checking that at least one item returns true for the test.


my_array_2 = my_array.some((item, index) => {
    return item === 'aaa' && item.length === 3 && item.startsWith('a');
});
dd(my_array_2);
// Returns 'true', after checking that at least one item returns true for the test.


dd_enabled = false;
