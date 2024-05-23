console.log('Hello World');

// assign DOM element to a variable 

const h1 = document.querySelector("h1");
// const allH1 = document.querySelectorAll("h1");
const h1ByClassTitle = document.querySelector(".title");
const h1ByIdLogo = document.querySelector("#logo");

// const h1ByClassName = document.getElementByClassName("#logo");

// console.log(h1);
// console.log(allH1);
// console.log(h1ByClassTitle);
// console.log(h1ByIdLogo);

console.dir(h1);
console.log(h1.innerText); 
h1.innerText = "Your website been hacked!";
console.log(h1.innerText); 

console.dir(h1ByClassTitle);

// code apply at inline style  
h1ByClassTitle.style.backgroundColor = "red";
h1ByClassTitle.style.color = "white";
h1ByClassTitle.style.padding = "20px";

// IMPORTANT: Assignment of elements to variables must be done initially
const text = document.querySelector("#text");
const nameInput = document.querySelector("#nameInput");
const submitName = document.querySelector("#submitName");

// 1. get the value of the input using event listener
// event in JavaScript 
// onsubmit, onclick, onmouseover, onmouseout, onkeydown, onkeyup, onkeypress 
// when use fill the input -> oninput, onchange
// accept 2 arguments: event name, callback function 
nameInput.addEventListener("input", function (e) {
    console.log(e.target.value);
});

// 2. add event listener to the button
submitName.addEventListener("click", function () {
    console.log("Button clicked");
    const name = nameInput.value;
    text.innerText = "Hello " + name + " !" ;
});

// intro to function 

// 1. function declaration
function greet(){
    // function scope
    console.log("Hello World");
}

// 2. function invocation / call 
greet();

// 3. function declaration with parameter 
function greetWithName (name) {
    console.log("Hello" + name);
}

// 4. function invocation with argument
greetWithName(" John");
greetWithName("Doe");
greetWithName("Jane");

// 5. function declaration with multiple parameters 
function greetWithNameAndAge(name, age) {
    console.log("Hello " + name + ", you are " + age + " years old");
  }

// 6. function invocation with multiple arguments 
greetWithNameAndAge("John", 25);
const test = greetWithNameAndAge("Doe", 30);
// test is undefined because the function does not return anything
console.log(test);

// 7. function declaration with return value 
function add(a, b) {
    return a + b;
}

// 8. function invocation with return value
const result = add(10, 20);
console.log(result);