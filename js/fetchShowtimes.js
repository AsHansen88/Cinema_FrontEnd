console.log("Location: fetchShowTimes.js");

// const tblMovies = document.getElementById("tblMovies");
// const tblShowtimes = document.getElementById("tblShowtimes");
const urlShowtimes = "http://localhost:8080/movie/showtimes/";
const ddShowtimes = document.getElementById("ddShowtimes");


let showtimeList = [];

async function actionGetShowtimesByMovieId() {
    console.log("er i linje 18");
    const ddIndex = ddMovies.selectedIndex;
    console.log(ddIndex);
    const linje = ddMovies[ddIndex];
    console.log(linje);
    const ddMovieId = linje.movieId;
    console.log(ddMovieId);

    showtimeList = await fetchAny(urlShowtimes + ddMovieId); // TODO fix the backend make it work
    console.log(showtimeList)
    showtimeList.forEach(fillDropdownShowtimes);
}

function fillDropdownShowtimes(showtime) {
    console.log("linje 32")
    const el = document.createElement("option");
    el.textContent = showtime.timeslot;
    console.log("linje 34")
    console.log(showtime)
    el.value = showtime.showtimeId;
    ddShowtimes.appendChild(el);
}

ddMovies.addEventListener("change", actionGetShowtimesByMovieId);
