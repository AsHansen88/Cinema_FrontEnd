console.log("Jeg er i createUser");


document.addEventListener('DOMContentLoaded', createUserFormEventListener);

let formUserCreation;


function createUserFormEventListener() {
    console.log("hej 25")
    formUserCreation = document.getElementById("formUserCreation");
    console.log("hej 27")
    console.log(formUserCreation)
    formUserCreation.addEventListener("submit", handleCreateUserFormSubmit);
}

async function handleCreateUserFormSubmit(event) {
    //Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const createUserForm = event.currentTarget;
    const createUserUrl = createUserForm.action;
    console.log(createUserForm)
    console.log(createUserUrl)
    // console.log(form === formUser)  <--- VOLDER PROBLEMER MED CROSS ORIGIN, EFTERLADT SOM ADVARSEL
    try {
        const formCreateUserData = new FormData(createUserForm);
        console.log(formCreateUserData);
        const responseDataCreateUser = await postFormData(createUserUrl, formCreateUserData);
        console.log("ResponseData:");
        console.log(responseDataCreateUser);

        alert(formCreateUserData.get('name') + ' er oprettet');

        if (responseDataCreateUser.ok) {
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

async function postFormData(createUserUrl, createUserForm) {
    const plainCreateUserFormData = Object.fromEntries(createUserForm.entries())
    console.log(createUserForm);
    const formCreateUserDataJsonString = JSON.stringify(plainCreateUserFormData)
    const fetchCreateUserOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formCreateUserDataJsonString
    }

    const responseCreateUser = await fetch(createUserUrl, fetchCreateUserOptions)

    if (!responseCreateUser.ok) {
        console.log("Error message:")
        const errorMessage = await responseCreateUser.text()
        throw new Error(errorMessage)
    }
    // TODO for this Userlogin post, the usual "return response.json()" is probably not needed?
    return responseCreateUser;
}