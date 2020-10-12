const $ = require('jquery');


/*
* Limit input box value to a number with 2 decimal points.
*
* Used to answer:
* - https://stackoverflow.com/questions/64312217/jquery-only-numeric-with-2-decimals-only-with-max-value/64313089#64313089
*
* */

let allowed_keys = [8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190];
let my_regex = /^([0-9]{0,8})(\.{1,1}[0-9]{0,2})?$/;
let old_val;
let x = $('#TXTCOST').on('keydown', function (event) {
    let input_value = $(this).val().toString();
    old_val = input_value;
    let found_dots = input_value.match(/\./g) || [];
    let split_input_value = input_value.split('.');
    let prevent_default = false;
    // console.log('value = ' + $(this).val());

    let tests = [];
    tests.push(() => {
        return allowed_keys.includes(event.which);
    });
    tests.push(() => {
        return (event.which !== 190) || ((event.which === 190) && (input_value.length > 0) && (found_dots.length === 0))
    });

    for (let i = 0; tests < i; i++) {
        if (tests[i]() === false) {
            event.preventDefault();
        }
        break;
    }

}).on('input', function (event) {
    let input_value = $(this).val().toString();
    let tests = [];
    tests.push(() => {
        if (my_regex.test(input_value)) {
            return true;
        } else {
            return false;
        }
    });
    for (let i = 0; tests < i; i++) {
        if (tests[i]() === false) {
            $(this).val(old_val);
        }
        break;
    }
});
