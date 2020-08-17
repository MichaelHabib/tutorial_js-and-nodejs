import dd from 'debugdump';

const tc = require('type-check').typeCheck;

// ************************************************************

function evalInContext(js, context) {
    return function (str) {
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
// testValue(undefined, 'myUndefined', 'undefined');
// testValue(true, 'myTrueBool', 'true');
// testValue(false, 'myFalseBool', 'false');


// ************************************************************
//  Simple DOM Manupliaton

let c1 = document.createElement('div');
c1.classList.add('c1-container', 'container');
// c1.textContent='c1 textContent'; //?
// c1.innerText='c1 innerText'; //?
c1.innerHTML = 'c1 innerHTML';
c1.id = "c1";
c1.style["text-align"] = "left";

let hr1 = document.createElement('hr');
c1.appendChild(hr1);
c1.appendChild(hr1.cloneNode());
c1.appendChild(hr1.cloneNode());

let b1 = document.createElement('button');
b1.innerText = "Click then check console log!";
b1.setAttribute("onClick", "window.console.log(this)");

c1.appendChild(b1);
document.body.append(c1);

let q1 = document.querySelectorAll('hr');
dd(q1);