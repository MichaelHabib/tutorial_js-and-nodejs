// include("./dom_manager.js");
/*
 * ********************************************
 * el() create element
 */
el = function (elem) {
    return document.createElement(elem);
};

/*
 * ********************************************
 * log var value & type
 */
function logVarType(st) {
    console.log(`- The value of the ${st} is "${st}"`);
    console.log(`| - and type is "${typeof (st)}" `);
}
//logVarType("TEXT");
//logVarType(10.8888989);
//logVarType(false);
//logVarType({a_key: "value"});
//logVarType(null);

/**
 * ********************************************
 * Print & Eval String in console.log: 
 * @param {string} st The string to print & eval()
 */
function ls(st) {
    console.log(`- ${st} = "${eval(st)}"`);
}

/*
 * ********************************************
 * String manipulation 
 */

var someString = "This is a string to be used for experimenting with strings!";

/*  Using indexOf() */
/*
 window.console.log(`someString length is ${someString.length}`);
 window.console.log(`someString.indexOf('be') is ${someString.indexOf('be')}`);
 window.console.log(`someString.lastIndexOf('st') is ${someString.lastIndexOf('st')}`);
 */

/*  extracting string parts */
/* 
 ls('someString.length');
 ls('someString.indexOf("be")');
 ls('someString.slice(slice_start=3,slice_end=10)');
 ls('someString.substr(offset = 3, slice_length = 10)');
 ls('someString.replace(string_to_replace = "is", string_to_use = "were")');
 ls('someString.replace(string_to_replace = "were", string_to_use = "is")');
 ls('someString.toUpperCase()');
 ls('someString.toLowerCase()');
 ls('someString.charAt(2)');
 */

var array1 = [];
array1.push("item 1");
array1.push("item 2");
//console.log(array1);

array1.shift();
//console.log(array1);

array1.unshift("new item 1");
//console.log(array1);

array2 = [];
array2.push("a2 item1");
array2.push("a2 item2");


array3 = array1.concat(array2);
//console.log(array3);

//console.log(array3.sort());

array4 = array3.filter(
        function (value, index, array) {
            return  value.indexOf('a2') > -1;
        }
);
//console.log(array4);


/*
 * ********************************************
 *  
 */


var elem, container, parent, child, body;

container = el("div");
container.classList.add("ui","container");
container.id ="container1";
document.body.appendChild(container);


parent = container;
elem = el("div");
elem.classList.add("ui","two","column","grid");
elem.id ="el3";
elem.style["text-align"] = "left";
parent.appendChild(elem);

/*  column 1 */

parent = elem;
elem = el("div");
elem.classList.add("column");
parent.appendChild(elem);


parent = elem;
elem = el("div");
elem.classList.add("ui","primary","button");
elem.id ="button1";
elem.setAttribute("onClick","alert('hii')");
elem.innerHTML = "button1 - say hii";
parent.appendChild(elem);




/*  column 2 */
parent = elem;
elem = el("div");
elem.classList.add("column");
parent.appendChild(elem);
