import dd from "debugdump";


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