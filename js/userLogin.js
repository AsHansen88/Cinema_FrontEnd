console.log("Vi er i userLogin.Js");

document.addEventListener('DOMContentLoaded', createFormEventListener);

let formUser;

function createFormEventListener() {
    console.log("hej 25")
    formUser = document.getElementById("formUser");
    console.log("hej 27")
    console.log(formUser)
    formUser.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
    //Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    console.log(form === formUser)
    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormData(url, formData)

        // når vi har oprettet sognet
        alert(formData.get('user') + ' er oprettet');

        // TODO Hvad er funktionaliuteten her?
        const homeUrl = "Login.html";
        window.location.replace(homeUrl); //man kan ikke gøre det her indeni en submit button
        //window.location.href = homeUrl;

    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

async function postFormData(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries())
    console.log(plainFormData);
    const formDataJsonString = JSON.stringify(plainFormData)
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formDataJsonString
    }

    const response = await fetch(url, fetchOptions)

    if (!response.ok) {
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    }
    return response.json();
}
