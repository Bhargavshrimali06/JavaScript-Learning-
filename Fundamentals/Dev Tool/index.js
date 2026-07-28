const userName = document.getElementById("userName");
const passWord = document.getElementById("passWord");
const message = document.getElementById("loginMsg");


function Login() {
    let name = userName.value;
    let password = passWord.value;

    // debugger;

    if (name == "Bhargav" && password == "Bhargav@1") {
        message.textContent = "login Successful!";
    } else {
        message.textContent = "Failed try again!!";
    }



}