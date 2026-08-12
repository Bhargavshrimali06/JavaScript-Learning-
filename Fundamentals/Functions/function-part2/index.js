//trying Inbuild Functions 
const myText = "Hello!! I am John";
const myNewText = myText.replace("John", "Bhargav");//replace does what it says 

console.log(myNewText);

const randomArray = ["I","am","Iron", "Man" ];
const madeAString = randomArray.join(" ");
console.log(madeAString); //So Join joins all the array together 

const myNum = Math.random();
console.log(myNum);//Random is just random 

//Invoking function
function myFunction() {
    alert("hellllooooooo");

}

myFunction();
//Anonymous Function 
const greet = function()
{
    console.log("this is an anonymous function!!");

}
setTimeout(greet, 5000);//setTimeout set time like 5000 is 5 sec so greet will lauch after 5sec ezzz


const arrays = [1,2,3];

console.log(arrays);

const double = arrays.map(item => item *2);

console.log(double);
