console.log("Vi er i fetchMovies fra Database")
const urlMovies = "http://localhost:8080/Movies"
const urlPostMovies = "http://localhost:8080/cinema_database"

function fetchAny(url) {
    console.log(url)
    return fetch(url).then((response) =>response.json())

}

let firstmovies = []

async function actionFetchMovies(){
    firstmovies = await fetchAny(urlMovies);
    console.log(firstmovies)
    firstmovies.forEach(fillMoviesDropdown)
}

function fillMoviesDropdown(movie){
const el = document.createElement("option")
el.textContent = movie.name
el.value = movie.name
ddMovies.appendChild(el)

}

const postMovieRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: body
}

function postMovie(movie){
    body = JSON.stringify(movie)
    console.log(body)
    postMovieRequest.body = body;
    fetch(urlPostMovies, postMovieRequest).catch((error) => console.log(error));
}

function actionPostAllMovies(bth){
    console.log("Post all movies")
    firstmovies.forEach(postMovie)
}


const pbFetchMovies = document.getElementById("pbFetchMovies")
const pbPostMovies = document.getElementById("pbPostMovies")
pbFetchMovies.addEventListener('click', actionFetchMovies)
pbPostMovies.addEventListener('Click', actionPostAllMovies)


