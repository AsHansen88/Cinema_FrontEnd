console.log("Vi er i WorkerLogin.Js");

var objPeople = [
    {
        username: "Bob",
        password: "KEy"

    },
    {
        username: "Monkeycode",
        password: "Keycode"
    }

 ]

function getInfo(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    for (var i = 0 ; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password){
            console.log("Whuhoo you logged in")
            //Hvis koden passer bliver du redirected til google.com
            const homeUrl = "ReservationSite.html";
            window.location.replace(homeUrl);
            return
        }
    }

    console.log("Incorrect username or password")
}

function registerNewWorker(){
    var RegisterUsername = document.getElementById('NewUsername').value
    var RegisterPassword = document.getElementById('NewPassword').value
    var NewWorker = {
        username: RegisterUsername,
        password: RegisterPassword
    }

    for(i = 0; i < objPeople.length; i++) {
        if(RegisterUsername == objPeople[i].username){

            alert("That name is in use")
            return
        } else if (RegisterPassword.length < 8) {
            alert("Password to short 8 or more charectors")
            return
        }
    }

    objPeople.push(NewWorker)
    console.log(objPeople)
    //objPeople.push(RegisterUsername, RegisterPassword)
}
