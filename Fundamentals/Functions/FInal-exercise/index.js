//writing and doing exercise given
const num = document.getElementById("numAdd");

function add7(a)
{
    return a + 7;
}

function showAns()
{
    const result = add7(Number(num.value));
    console.log(result);
}

const numM1 = document.getElementById("num1");//here in name M stand for Multiplication value
const numM2 = document.getElementById("num2");

function multiply(a, b)
{
    return a * b;
}

function multiplyANS()
{
    const result = multiply(Number(numM1.value), Number(numM2.value));
    console.log(result);
}

const words = document.getElementById("Words");

function capitalise()
{
    let word = words.value;
    let rest = word.slice(1);
    let first = word[0];

   let ans = first.toUpperCase() + rest.toLowerCase();
   return ans;
}

function capitaliseAns() 
{
const newWord = capitalise();
console.log(newWord);
}

//creating a function that takes last letter of string given 
const stringWord = document.getElementById("string1");

function lastLetter()
{
    let word = stringWord.value;
    let result = word[word.length - 1];
    return result;
}

function showAnsOfLastLetter()
{
    const answer = lastLetter();
    console.log(answer);

}