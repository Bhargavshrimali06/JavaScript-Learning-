const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const message = document.getElementById("loginMsg");

//this loop is made to use breakpoints set one on console log and 
// reload the page u will be able to see each number it goes trough.
 for (let i = 0; i <= 5; i++) {
    console.log(i);
 }

 
function Login() {
    let name = userName.value;
    let password = passWord.value;

    // debugger;

    if (name === "Bhargav" && password === "Bhargav@1") {
        message.textContent = "login Successful!";
    } else {
        message.textContent = "Failed try again!!";
    }



}

 