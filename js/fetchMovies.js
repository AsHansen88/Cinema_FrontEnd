/*console.log("Vi er i fetchMovies fra Database")
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

*/
import { imageBaseURL } from "./api.js";


export function createMovieCard(movie) {

    const {
        poster_path,
        title,
        vote_average,
        release_date,
        id
    } = movie;

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <figure class="poster-box card-banner">
      <img src="${imageBaseURL}w342${poster_path}" alt="${title}" class="img-cover" loading="lazy">
    </figure>
    
    <h4 class="title">${title}</h4>
    
    <div class="meta-list">
      <div class="meta-item">
        <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
    
        <span class="span">${vote_average.toFixed(1)}</span>
      </div>
    
      <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>
    
    <a href="./detail.html" class="card-btn" title="${title}" onclick="getMovieDetail(${id})"></a>
  `;

    return card;
}
