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

const dd = function (message, stack_item_index = 3, show_filepath = true) {

    console.log(message);
    console.log('|_ ' + this_line(stack_item_index, show_filepath));

}


/*
* ************************************************************
* * Start of Vanilla JS Basics - String Data Type Guide
* ************************************************************
 * */
dd('= Start of Vanilla JS Basics - String Data Type Guide')
/*
* ************************************************************
* Variable declarations and assignment
* */

let my_string = "This is my string !"
let my_string_object = new String("This is my second string !!");


/*
* ************************************************************
*
* */
dd(typeof my_string); // prints "string"
dd(my_string.length); // prints "19"

dd(my_string_object); // prints "[String: 'This is my second string !!']"
dd(my_string_object.valueOf()); // prints "This is my second string !!"
dd(my_string_object.constructor.name) // prints "String"

/*
* ************************************************************
* Finding a string
* */
dd(my_string.indexOf('my')); // prints "8"
dd(my_string.indexOf('is', 4)); // prints "5", as the search started from the 4th character.
dd(my_string.indexOf('non-existing')); // prints "-1" when string is not found.
dd(my_string.lastIndexOf(' ')); // 17
dd(my_string.search(/my/g)); // prints '8', search done with regex.
dd(my_string.startsWith('my', 8)); // prints 'true', after checking if 'my' is at the start of the string after applying the optional start offset.
dd(my_string.endsWith('is', 7)); // prints 'true', after checking if 'is' is at the end of the string after applying the optional end offset.
dd(my_string.includes('my')); // prints 'true'
dd(my_string.match(/i[a-zA-Z]/ig)); // prints '[ 'is', 'is', 'in' ]'
dd(my_string.repeat(2)); // prints the string repeated x times.

/*
* ************************************************************
* Extracting & Modifying a string
* */


dd(my_string.slice(0, 7)); // prints 'This is', extracting characters 0-7 to a new variable.
dd(my_string.slice(11)); // prints 'string !', extracting characters 11 onwards to a new variable.
dd(my_string.slice(-4)); // prints 'ng !', extracting 4 characters from the end of the string to a new variable.
dd(my_string.charAt(3)); // prints 's', extracting the 3rd characters from the end of the string to a new variable.


/*
* substring does not support negative numbers & left as is for backward compatibility.
* Use slice() for a more consistent outcome.
* */
dd(my_string.substring(0, 7)); // prints 'This is', extracting characters 0-7 to a new variable.
dd(my_string.substring(11)); // prints 'string !', extracting characters 11 onwards to a new variable.
dd(my_string.substring(-4)); // prints 'This is my string!', converting the negative "-4" to 0 then printing 0-string.length to a new variable.


dd(my_string.substr(0, 7)); // prints 'This is', extracting 7 characters counting from 0 to a new variable.
dd(my_string.substr(11)); // prints 'string !', extracting characters 11 onwards to a new variable.
dd(my_string.substr(-4)); // prints 'ng !', extracting 4 characters from the end of the string to a new variable.
dd(my_string.substr(3, 7)); // prints 's is my', extracting 7 characters counting from 3 to a new variable.

dd(my_string.replace('!', '??')); // prints 'This is my string ??', replacing the first occurrence of '!' with '??'

dd(my_string.replace('IS', 'was')); // prints 'This is my string !', the search value is case sensitive , so nothing was replaced!

dd(my_string.replace(/IS/ig, 'huh')); // prints 'Thhuh huh my string !', replacing ALL occurrences of 'IS' with 'huh' using a regex. /i flag switched case-insensitive search while the /g flag switched on replace-all functionality .


/*
* ************************************************************
* Converting a string to array
* */

dd(my_string.split('')); // prints an array of single characters.
dd(my_string.split(' ')); // prints an array of words that were separated by a space.


/*
* ************************************************************
* Converting string to other data types.
* */

// dd(Number(my_string));

/*
* ************************************************************
* isString()
* */

function isString (value) {
    return typeof value === 'string' || value instanceof String;
}