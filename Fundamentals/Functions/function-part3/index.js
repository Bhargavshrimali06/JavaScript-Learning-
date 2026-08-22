let sayHello = function() 
{
    alert("hello");
}
 
let borrow = sayHello();

console.log(borrow);
sayHello();

//trying simple function system 

function ask(question, yes, no)
{
    if(confirm(question)) 
        yes()
    else 
        no();
}

// function showAgree()
// {
//     alert("You have agreed.");
// }                              //these functions are just callback functions 
// function showDisagree()
// {
//     alert("You have Disagreed.");
// }

// ask("Do you agree on this website terms?", showAgree, showDisagree);

//trying short method 
ask("Do you Agree with our Terms & Condition?"
    ,function() { alert("You have agreed.")}  //this is short method very easy to write and read
    ,function() { alert("You have disagreed.")}
);
