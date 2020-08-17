import dd from 'debugdump';

const tc = require('type-check').typeCheck;

// ************************************************************

function evalInContext(js, context) {
    return function(str){
        return eval(str);
    }.call(context, ' with(this) { ' + js + ' } ');
}

// const testVar = ($var) => {
const testValue = ($var, $varNameString, $varValueString) => {

    // let getVarNam = (obj) => {
    //     return Object.keys(obj)[0];
    //     // return Object.keys(obj);
    // };
    // let $varName = getVarNam($var);
    // let $varValue = $var[$varName];
    // let $evalString = 'var ' + $varNameString + " = " + $varValueString;
    // dd($evalString);


    dd('= Testing : let ' + $varNameString + ' = ' + $varValueString);
    dd('value of ' + $varNameString + ' = ' + $var);
    dd('type of ' + $varNameString + ' = ' + typeof $var);

    dd(`Number.isNaN(${$varNameString})` + ' = ' + Number.isNaN($var));
    dd(`Number.isInteger(${$varNameString})` + ' = ' + Number.isInteger($var));
    dd(`Number.isSafeInteger(${$varNameString})` + ' = ' + Number.isSafeInteger($var));
    dd(`Number.isFinite(${$varNameString})` + ' = ' + Number.isFinite($var));

};


// const whatsMyName = "Snoop Doggy Dogg";

// console.log("Variable name is: " + name({whatsMyName}));


// testValue('myString Here', 'myString', '"myString Here"');
// testValue(4, 'myIntNumber', '4');
// testValue(46.222, 'myFloatNumber', '46.222');
// testValue("79", 'myNumberAsString', '"79"');
// testValue(Math.pow(10, 1000), 'myInfiniteNumber', 'Math.pow(10, 1000)');
// testValue(NaN, 'myNaN', 'NaN');
testValue(undefined, 'myUndefined', 'undefined');
// testValue(true, 'myTrueBool', 'true');
// testValue(false, 'myFalseBool', 'false');

/*
 ************************************************************
 * el() create element
 */
let el = function (elem) {
    return document.createElement(elem);
};


var elem, container, parent, child, body;

container = el("div");
container.classList.add("ui", "container");
container.id = "container1";
document.body.appendChild(container);


parent = container;
elem = el("div");
elem.classList.add("ui", "two", "column", "grid");
elem.id = "el3";
elem.style["text-align"] = "left";
parent.appendChild(elem);

/*  column 1 */

parent = elem;
elem = el("div");
elem.classList.add("column");
parent.appendChild(elem);


parent = elem;
elem = el("div");
elem.classList.add("ui", "primary", "button");
elem.id = "button1";
elem.setAttribute("onClick", "alert('hii')");
elem.innerHTML = "button1 - say hii";
parent.appendChild(elem);


/*  column 2 */
parent = elem;
elem = el("div");
elem.classList.add("column");
parent.appendChild(elem);
