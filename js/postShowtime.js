console.log("vi er i postShowtime.js");

document.addEventListener('DOMContentLoaded', createShowtimeFormEventListener);


let formShowtime;

function createShowtimeFormEventListener(){
    formShowtime = document.getElementById("formShowtime");
    formShowtime.addEventListener("submit", handleShowtimeFormSubmit);
}



async function handleShowtimeFormSubmit(event) {
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

        // Når vi har oprettet showtime
        alert(formData.get('showtime') + ' er oprettet');

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
    plainFormData.movieTheater = {};
    plainFormData.movieTheater.movieTheaterId = 1;
    console.log(ddIndex);
    const selectedMovie = ddMovies[ddIndex];
    console.log(selectedMovie);
    plainFormData.movie = selectedMovie.movie;
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
