console.log("Vi er i userLogin.Js");

document.addEventListener('DOMContentLoaded', createFormEventListener);

let formUser;

function createFormEventListener() {
    console.log("hej 25")
    formUser = document.getElementById("formUser");
    console.log("hej 27")
    console.log(formUser)
    formUser.addEventListener("submit", handleUserLoginFormSubmit);
}


async function handleUserLoginFormSubmit(event) {
    //Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    // console.log(form === formUser)  <--- VOLDER PROBLEMER MED CROSS ORIGIN, EFTERLADT SOM ADVARSEL
    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormData(url, formData);
        console.log("ResponseData:");
        console.log(responseData);

        if (responseData.ok) {
            const homeUrl = "Index.html";
            window.location.replace(homeUrl);
        }
        //man kan ikke gøre det her indeni en submit button
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
    console.log(response)
    if (!response.ok) {
        console.log("Error message:")
        const errorMessage = await response.text()
        throw new Error(errorMessage)
    }
    // for this Userlogin post, the usual "return response.json()" is not needed
    return response;
}

