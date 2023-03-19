console.log("Location: fetchShowTimes.js");

const tblShowtimes = document.getElementById("tblShowtimes");
const urlShowtimes = "http://localhost:8080/movie/showtime/";
const tblMovies = document.getElementById("tblMovies");
const ddShowtimes = document.getElementById("ddShowtimes");



function fetchAny(url) {
    console.log(url);
    return fetch(url).then((response) => response.json);
}

let showtimeList = [];

async function actionGetShowtimesByMovieId() {
    console.log("er i linje 18");
    const ddIndex = ddMovies.selectedIndex;
    console.log(ddIndex);
    const linje = ddMovies[ddIndex];
    console.log(linje);
    const movieId = linje.movieId;
    console.log(movieId)

    showtimeList = fetchAny(urlShowtimes + movieId); // TODO fix the backend make it work
    console.log(showtimeList);
    showtimeList.forEach(fillDropdownShowtimes);
}

function fillDropdownShowtimes(showtime) {
    const el = document.createElement("option");
    el.textContent = showtime.timeslot;
    el.value = showtime.showtimeId;
    ddShowtimes.appendChild(el);
}


actionGetShowtimesByMovieId();
ddMovies.addEventListener("change", actionGetShowtimesByMovieId);

