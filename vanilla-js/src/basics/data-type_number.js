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
* * Start of Vanilla JS Basics - Number Data Type Guide
* ************************************************************
 * */



/*
* ************************************************************
* Number static properties
* */


dd(Number.MAX_VALUE);
// Returns '1.7976931348623157e+308', the max allowed JS number which is NOT accurate number!

dd(Number.MIN_VALUE);
// Returns '5e-324', the min allowed JS number which is NOT accurate number!


// Returns max safe JS number : 9007199254740991
dd(Number.MAX_SAFE_INTEGER);

// Returns min safe JS number : -9007199254740991
dd(Number.MIN_SAFE_INTEGER);

// Returns 'Infinity'
dd(Number.POSITIVE_INFINITY);

// Returns '-Infinity'
dd(Number.NEGATIVE_INFINITY);


/*
* ************************************************************
* Numbers formatting
* */
// Returns '"1.5e+5"' , rounded & formatted to 2 decimal points as presented in exponential notation as a string.
dd(Number(148833).toExponential(2));

// Returns '"1.4883300000e+5"' , rounded & formatted to 10 decimal points as presented in exponential notation as a string.
dd(Number(148833).toExponential(10));

// print '150000' as a number after converting exponential notation string to a number.
dd(Number(Number(148833).toExponential(1)));

// Returns '"1.49e+5"', after formatting the number to 3 characters (including the decimal points), presented in exponential notation if needed. zero padded if needed.
dd(Number(148833).toPrecision(3));

// Returns '"148833.00000000000000"', after formatting the number to 3 characters (including the decimal points).
// Zero padded if needed.
dd(Number(148833).toPrecision(20));

// Returns '"1.49e+5"', fixed to 3 decimal points, zero padded if needed.
dd(Number(148833).toFixed(3));


// Returns '"47.9"', after formatting the number to 3 characters (including the decimal points), presented in exponential notation if needed.
dd(Number(47.8635).toPrecision(3));

// Returns '"47.863500000000001933"', after formatting the number to 3 characters (including the decimal points). The extra numbers are due to precision issues with JS Math & binary code.
dd(Number(47.8635).toPrecision(20));

// Returns '"47.9"', fixed to 3 decimal points. zero padded if needed.
dd(Number(47.8635).toFixed(3));


/*
* ************************************************************
* Converting strings to numbers.
* */

dd(Number(148833));
// print '148833'.

dd(Number('148833'));
// print '148833'.

dd(Number('7e2'));
// print '700'.


/*
* ************************************************************
* Converting number to other data types.
* */

dd(Number(148833).toString());
// print '"148833"'.

dd(Number(148833).toLocaleString('ar-SA'));
// print '"١٤٨٬٨٣٣"'.

dd(Number(Number(148833)));
// Returns '148833'

dd(parseInt(Number(148833)));
// Returns '148833'

dd(parseFloat(Number(148833)));
// Returns '148833'

dd(String(Number(148833)));
// Returns '"148833"'

dd(Boolean(Number(148833)));
// Returns 'true'

dd(Array(Number(13)));
// Returns '[ <13 empty items> ]', which is an array with 13 empty elements !

/*
* ************************************************************
* Checks & Validation
* */

dd(typeof 148833);
// Returns "number"

dd(Number(148833).constructor.name);
// Returns "Number"

dd(new Number(148833));
// Returns "[Number: 148833]"

dd(new Number(148833).valueOf());
// Returns "148833"

dd(new Number(148833).constructor.name)
// Returns "Number"

// ************************************************************
// Basic Integers

dd(Number.isInteger(148833));
// Returns 'true'

dd(Number.isSafeInteger(148833));
// Returns 'true'

dd(Number.isFinite(148833));
// Returns 'true'

dd(Number.isNaN(148833));
// Returns 'false'

// ************************************************************
// Decimal Numbers

dd(Number.isInteger(38.742));
// Returns 'false'

dd(Number.isSafeInteger(38.742));
// Returns 'false'

dd(Number.isFinite(38.742));
// Returns 'true'

dd(Number.isNaN(38.742));
// Returns 'false'

// ************************************************************
// Numbers as Strings

dd(Number.isInteger('38.742'));
// Returns 'false'

dd(Number.isSafeInteger('38.742'));
// Returns 'false'

dd(Number.isFinite('38.742'));
// Returns 'false'

dd(Number.isNaN('38.742'));
// Returns 'false'

// ************************************************************
// Number.isNaN . Not to be confused with the global isNaN()

dd(Number.isNaN(undefined));
// Returns 'false'

dd(Number.isNaN(undefined * 2));
// Returns 'true', impossible operation.

dd(Number.isNaN('string123' * 2));
// Returns 'true', mathematical operations on strings return NaN.

dd(Number.isNaN(Math.sqrt(-2)));
// Returns 'true', impossible number.


dd(Number.isNaN(Number(undefined)));
// Returns 'true', converting undefined to a number returns NaN

dd(Number.isNaN(Number('my string')));
// Returns 'true', converting a non-number string to a number returns NaN

dd(Number.isNaN(Number('3e5')));
// Returns 'false', '3e4' is a number written in exponential notation.

dd(Number.isNaN(parseInt(undefined)));
// Returns 'true', parsing undefined to int returns NaN.


dd(Number.isNaN(Infinity * 0));
// Returns 'true'

// ************************************************************
// Max Safe Integers

dd(Math.pow(2, 53));
// Returns '9007199254740992'


dd(Number.isInteger(Math.pow(2, 53)));
// Returns 'true'

dd(Number.isSafeInteger(Math.pow(2, 53)));
// Returns 'false', as 2^53-1 is the max safe number.

dd(Number.isSafeInteger(Math.pow(2, 53) - 1));
// Returns 'true', as 2^53-1 is the max safe number.

dd(Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER);
// Returns 'true', as 2^53-1 is the max safe number.

dd(Number.isFinite(Math.pow(2, 53)));
// Returns 'true', numbers above the MAX_SAFE_INTEGER are still considered finite numbers.

dd(Number.isNaN(Math.pow(2, 53)));
// Returns 'false', numbers above the MAX_SAFE_INTEGER are still considered numbers.

// ************************************************************


function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
