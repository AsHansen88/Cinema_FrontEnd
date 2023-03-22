console.log("Vi er i postMovie")

document.addEventListener('DOMContentLoaded', createShowtimeFormEventListener);


let formMovie;

function createShowtimeFormEventListener(){
    formMovie = document.getElementById("formMovie");
    formMovie.addEventListener("submit", handleFormSubmit);
}



async function handleFormSubmit(event) {
    //Vi handler submit her, i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    // console.log(form === formUser)
    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormData(url, formData)

        // Når vi har oprettet movie
        alert(formData.get('movie') + ' er oprettet');

        const homeUrl = "Login.html";
        window.location.replace(homeUrl); // Man kan ikke gøre det her indeni en submit button
        //window.location.href = homeUrl;

    } catch (error) {
        alert(error.message)
        console.log(error)
    }
}

async function postFormData(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries())
    const ddIndex = ddMovies.selectedIndex;
    console.log(ddIndex);
    const selectedMovie = ddMovies[ddIndex];
    console.log(selectedMovie);
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

