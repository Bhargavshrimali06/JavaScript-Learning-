
//Simple Switch example which changes text depanding on weather selected
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


// This is for ternary operator this changes Theme depanding on selected value

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


//Using OR || 
let firstName = "Shrimali Bhargav";
let lastName = "";
let nickName = "";

alert(firstName || lastName || nickName || "Unknown");//this will return only defined variable if none is defined it will return Unknown
