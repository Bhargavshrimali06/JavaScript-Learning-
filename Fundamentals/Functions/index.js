


//A simple Function to test 
function favoriteAnimal(animal) 
{
    return animal + "is my favorite Animal!"
}

const message = favoriteAnimal('horsh')
console.log(favoriteAnimal('turtal'))


function greet()
{
    alert("Hello, Welcome User!!")
}

greet()

//testing if function can chnage value of outer variable 
let userName = "joy";

function changeName()
{
   let userName = "Bob";
    let message = "hello " + userName;
    alert(message);
}

alert(userName);

changeName();

// alert(userName);

function call(parameter1, paramater2 = "no text given!!") //if no text is given as argument for parameter2 it will show this text instead
{
   parameter1 = "'" + parameter1 + "'";

   alert( parameter1 + ": " + paramater2);

}
 
let parameter1 = "Joy";

call(parameter1, "Konichiwa!!");

alert(parameter1);