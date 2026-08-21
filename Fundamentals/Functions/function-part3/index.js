let sayHello = function() 
{
    alert("hello");
}
 
let borrow = sayHello();

console.log(borrow);
sayHello();

function ask(question, yes, no)
{
    if(confirm(question)) 
        yes()
    else 
        no();
}

function showAgree()
{
    alert("You have agreed.");
}
function showDisagree()
{
    alert("You have Disagreed.");
}

ask("Do you agree on this website terms?", showAgree, showDisagree);
