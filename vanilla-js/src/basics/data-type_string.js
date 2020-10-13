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
dd(typeof my_string);
// Returns "string"

dd(my_string.length);
// Returns "19"

dd(my_string_object.constructor.name);
// Returns "String"


dd(my_string_object);
// Returns "[String: 'This is my second string !!']"

dd(my_string_object.valueOf());
// Returns "This is my second string !!"

dd(my_string_object.constructor.name);
// Returns "String"

/*
* ************************************************************
* Finding a string
* */

dd(my_string.indexOf('my'));
// Returns '8', the position of the first occurrence of the string.

dd(my_string.indexOf('is', 4));
// Returns '5', the position of the first occurrence of the string, after the specified starting index.

dd(my_string.indexOf('non-existing'));
// Returns "-1" when string is not found.

dd(my_string.lastIndexOf(' '));
// Returns 17, the position of the last occurrence of the string.

dd(my_string.search(/is/g));
// Returns '2', the position of the first occurrence of the string.

dd(my_string.match(/is/g));
// Returns '[ 'is', 'is' ]', an array with the result of the RegExp, returns NULL if nothing is found.

dd(my_string.startsWith('my', 8));
// Returns 'true', after checking if 'my' is at the start of the string after applying the optional start offset.

dd(my_string.endsWith('is', 7));
// Returns 'true', after checking if 'is' is at the end of the string after applying the optional end offset.

dd(my_string.includes('my'));
// Returns 'true'

dd(my_string.match(/i[a-zA-Z]/ig));
// Returns '[ 'is', 'is', 'in' ]'

dd(my_string.repeat(2));
// Returns the string repeated x times.

/*
* ************************************************************
* Extracting & Modifying a string
* */


dd(my_string.slice(0, 7));
// Returns 'This is', extracting characters 0-7 to a new variable.

dd(my_string.slice(11));
// Returns 'string !', extracting characters 11 onwards to a new variable.

dd(my_string.slice(-4));
// Returns 'ng !', extracting 4 characters from the end of the string to a new variable.

dd(my_string.charAt(3));
// Returns 's', extracting the 3rd characters from the end of the string to a new variable.


/*
* substring does not support negative numbers & left as is for backward compatibility.
* Use slice() for a more consistent outcome.
* */

dd(my_string.substring(0, 7));
// Returns 'This is', extracting characters 0-7 to a new variable.

dd(my_string.substring(11));
// Returns 'string !', extracting characters 11 onwards to a new variable.

dd(my_string.substring(-4));
// Returns 'This is my string!', converting the negative "-4" to 0 then printing 0-string.length to a new variable.


dd(my_string.substr(0, 7));
// Returns 'This is', extracting 7 characters counting from 0 to a new variable.

dd(my_string.substr(11));
// Returns 'string !', extracting characters 11 onwards to a new variable.

dd(my_string.substr(-4));
// Returns 'ng !', extracting 4 characters from the end of the string to a new variable.

dd(my_string.substr(3, 7));
// Returns 's is my', extracting 7 characters counting from 3 to a new variable.

dd(my_string.replace('!', '??'));
// Returns 'This is my string ??', replacing the first occurrence of '!' with '??'

dd(my_string.replace('IS', 'was'));
// Returns 'This is my string !', the search value is case sensitive , so nothing was replaced!

dd(my_string.replace(/IS/ig, 'huh'));
// Returns 'Thhuh huh my string !', replacing ALL occurrences of 'IS' with 'huh' using a regex.
// /i flag switched case-insensitive search while the /g flag switched on replace-all functionality .


/*
* ************************************************************
* Converting a string to array
* */

dd(my_string.split(''));
// Returns an array of single characters.

dd(my_string.split(' '));
// Returns an array of words that were separated by a space.


/*
* ************************************************************
* Converting string to other data types.
* */

// dd(Number(my_string));

/*
* ************************************************************
* Checks & Validation
* */

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}



