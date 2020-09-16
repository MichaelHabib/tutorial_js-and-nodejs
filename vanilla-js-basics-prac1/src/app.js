import dd from 'debugdump';


// ************************************************************
//  Simple DOM Manipulation

let container1 = document.createElement('div');
container1.classList.add('c1-container', 'container');
// c1.textContent='c1 textContent'; //?
// c1.innerText='c1 innerText'; //?
container1.innerHTML = 'c1 innerHTML';
container1.id = "c1";
container1.style["text-align"] = "left";

let hr1 = document.createElement('hr');
container1.appendChild(hr1);
container1.appendChild(hr1.cloneNode());
container1.appendChild(hr1.cloneNode());

let button1 = document.createElement('button');
button1.innerText = "Click then check console log!";
button1.setAttribute("onClick", "window.console.log(this)");

container1.appendChild(button1);
document.body.append(container1);

let query1 = document.querySelectorAll('hr');
dd('= find and log all <hr> elements');
dd(query1);


// ************************************************************
//  Testing variable types under certain conditions

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
    dd('- value of ' + $varNameString + ' = ' + $var);
    dd('- type of ' + $varNameString + ' = ' + typeof $var);

    dd(`- Number.isNaN(${$varNameString})` + ' = ' + Number.isNaN($var));
    dd(`- Number.isInteger(${$varNameString})` + ' = ' + Number.isInteger($var));
    dd(`- Number.isSafeInteger(${$varNameString})` + ' = ' + Number.isSafeInteger($var));
    dd(`- Number.isFinite(${$varNameString})` + ' = ' + Number.isFinite($var));


    dd(`- Array.isArray(${$varNameString})` + ' = ' + Array.isArray($var));
    dd(`- Object.prototype.toString.call(${$varNameString})` + ' = ' + Object.prototype.toString.call($var));

    dd(`- undefined + ${$varNameString} below: `);
    dd(undefined + $var);

    dd(`- 5 + ${$varNameString} below: `);
    dd(5 + $var);

    dd(`- 5 - ${$varNameString} below: `);
    dd(5 - $var);

    dd(`- 5 * ${$varNameString} below: `);
    dd(5 * $var);

    dd(`- 5 / ${$varNameString} below: `);
    dd(5 / $var);
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
// testValue(function(){}, 'myFunction', 'function(){}');
// testValue({prop:"value"}, 'myObject', '{prop:"value"}');
// testValue(['item1','item2'], 'myArray', "[\'item1\',\'item2\']");

/* ************************************************************
* Arrays & Loops
* */

/*
Create Array
*/
const myAlphabetA2EArray = ['a', 'b', 'c', 'd', 'e'];
const myAlphabetF2KArray = ['f', 'g', 'h', 'i', 'j','k'];

/*
Manipulating and Merge Arrays
*/
const myAlphabetArray = [].concat(myAlphabetA2EArray,myAlphabetF2KArray);
myAlphabetArray.unshift('x'); // Add items to the start of an array.
myAlphabetArray.push('z'); // Add items to the end of an array.
myAlphabetArray.splice(0,1) // Removes a number of items from a specified starting point.
myAlphabetArray.splice(myAlphabetArray.length-1,1, 'Y, z has been replaced!')

const myAlphabetSliceArray = myAlphabetArray.slice(1,3); // "copy" items from specified range into a new array without modifying the source array.

/*
Create a simple key=>value object.
*/
const myNatoPhoneticAlphabetObject = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};
/*
Convert object properties into an array.
*/
const myNatoPhoneticAlphabetArray = Object.entries(myNatoPhoneticAlphabetObject);

/*
Simple forEach loop
 */
myAlphabetArray.forEach((v, i) => {
    dd(`${i} : ${v}`);
});

myNatoPhoneticAlphabetArray.forEach((v, i) => {
    // dd(`${i} : ${v}`);
});

/*
Loop using X in Arr
Can be used to iterate over object properties.
*/
// for (const i in myNatoPhoneticAlphabetArray) {
for (const k in myNatoPhoneticAlphabetObject) {
    // dd(`${k} : ${myNatoPhoneticAlphabetObject[k]}`);


}

/*
Loop using [k,v] OF Arr .
Keep in mind this uses OF not IN.
 */
for (const [i, v] of myNatoPhoneticAlphabetArray) {
    // dd(`${i} : ${v}`);

}


/* ************************************************************
* Switch
* */
const switchKey = "x";
switch (switchKey) {
    case "x": dd("switchKey = x , but no break command, so keep looking!");
    default: dd("default switch case here ...");
}


/*
* ************************************************************
* Maps : Maintains the order of added elements.
* */
const myMap = new Map();
myMap.set('v', 'VVV');
myMap.set('a', 'AAA');
dd(myMap.entries());


