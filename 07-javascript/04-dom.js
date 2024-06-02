// Exercise #1:
//java can change any of the elements in html
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput1 = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

//console.log(copy);
// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  //console.log('click event', event);
  output.textContent = userInput1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector("#userInput2");
//console.log(userInput2);

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

let section = document.querySelector("#inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "output");
section.append(element);

// callback function to handle event
function handleInput(event) {
  console.log(userInput2.value);
  element.textContent = userInput2.value;
}
