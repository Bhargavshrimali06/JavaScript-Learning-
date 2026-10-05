

// create a loop that prints number from one upto whatever the number user gave 
// if (n % 3 == 0) -> fizz else if (n % 5== 0) -> buzz else if (n % 3 == 0 && n % 5 ==0) -> fizzbuzz

let userInput = parseInt(prompt("Please Enter the number you would like to fizzbuzz up to:  "));

let num = userInput;

for(let i = 1; i <= num; i++)
{
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 == 0){
        console.log("fizz");

    } else (
        console.log(i)
    )
}