//A simple Function to test
function favoriteAnimal(animal) {
  return animal + "is my favorite Animal!";
}

const message = favoriteAnimal("horse");
console.log(favoriteAnimal("turtle"));

function greet() {
  alert("Hello, Welcome User!!");
}

greet();

//testing if function can chnage value of outer variable
let userName = "joy";

function changeName() {
  let userName = "Bob";
  let message = "hello " + userName;
  alert(message);
}

// alert(userName);

changeName();

// alert(userName);

function call(parameter1, parameter2 = "no text given!!") {
  //if no text is given as argument for parameter2 it will show this text instead
  parameter1 = "'" + parameter1 + "'";

  alert(parameter1 + ": " + parameter2);
}

let parameter1 = "Joy";

call(parameter1, "Konnichiwa!!");

// alert(parameter1);

let myName = null; //testing nullish coalescing operator

console.log(myName ?? "guest"); //if name is null or undefined it will choose the guest

//testing return
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Get permission from an Adult:");
  }
}

let age = prompt("How old are you?", 19);


if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}
