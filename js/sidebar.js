import { api_key, fetchDataFromServer } from "./Api.js";


export function sidebar() {

    /**
     * fetch all genres eg: [ { "id": "123", "name": "Action" } ]
     * then change genre formate eg: { 123: "Action" }
     */
    const genreList = {};

    fetchDataFromServer(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`, function ({genres}) {
        for (const {id, name} of genres) {
            genreList[id] = name;
        }

        genreLink();
    });


    const sidebarInner = document.createElement("div");
    sidebarInner.classList.add("sidebar-inner");
}