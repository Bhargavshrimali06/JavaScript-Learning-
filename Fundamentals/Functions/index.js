


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
