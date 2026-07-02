const select = document.querySelector("#Weather");
const QuotePara = document.querySelector("#QuoteP");

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    switch (choice) {
        case "Sunny" : QuotePara.textContent = "Perfect day to touch some grass.";
        break;
        case "Rainy" : QuotePara.textContent = "Stay in, code more. Nature agrees.";
        break;
        case "Thunder" : QuotePara.textContent = "Even the sky can't make up its mind today.";
        break;
        case "Snowy" : QuotePara.textContent = "Everything's paused. You should be too.";
        break;
        default: QuotePara.textContent = "";
    }


    
} 
// This is for ternary operator
const Theme = document.querySelector("#theme");
const html = document.querySelector("html");
document.body.style.padding = "15px";

 function update(bgColor, textColor) 
 {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;

 }

 Theme.addEventListener("change", () => 
 Theme.value === "black" 
 ? update("black", "white")
 : Theme.value === "red" 
 ? update("red", "blue")
 : Theme.value === "blue"
 ? update("blue", "red")
 : update("white", "black"),

);

// let name = prompt("What is the official name of javascript??");

// if (name == "ECMAScript") {
//     alert("your right!! ")
// } else {
//     alert("You don't know? it's ECMAScript");
// }

let num = prompt("type an number");

if (num > 0) {
    alert(1);
} else if (num < 0) {
    alert(-1);
} else {
    alert(0); 
}



let result = (a + b < 4) ? result = 'Below' : result = 'Over';

