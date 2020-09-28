
import "debugdump";
import "printvaluetype";



// ************************************************************
//  Testing variable types under certain conditions


// const whatsMyName = "Snoop Doggy Dogg";

// console.log("Variable name is: " + name({whatsMyName}));


// printvaluetype('myString Here', 'myString', '"myString Here"');
// printvaluetype(4, 'myIntNumber', '4');
// printvaluetype(46.222, 'myFloatNumber', '46.222');
// printvaluetype("79", 'myNumberAsString', '"79"');
// printvaluetype(Math.pow(10, 1000), 'myInfiniteNumber', 'Math.pow(10, 1000)');
// printvaluetype(NaN, 'myNaN', 'NaN');
// printvaluetype(undefined, 'myUndefined', 'undefined');
// printvaluetype(true, 'myTrueBool', 'true');
// printvaluetype(false, 'myFalseBool', 'false');
// printvaluetype(function(){}, 'myFunction', 'function(){}');
// printvaluetype({prop:"value"}, 'myObject', '{prop:"value"}');
// printvaluetype(['item1','item2'], 'myArray', "[\'item1\',\'item2\']");

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


