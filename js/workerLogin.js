console.log("Vi er i WorkerLogin.Js");

const loginForm = document.getElementById("WorkerLogin");
const loginButton = document.getElementById("WorkerLogin-submit");
const loginErrorMsg = document.getElementById("WorkerLogin-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Worker" && password === "123") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})


