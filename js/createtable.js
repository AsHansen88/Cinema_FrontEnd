console.log("Vi er i CreateTable")

const pbCreateTable = document.getElementById("pbCreateTable")
const TblMovies = document.getElementById("TblMovies")
const pbUpdate = document.getElementById("pbUpdate")

function createTable(Movie) {
    console.log(Movie.name)
    if (!Movie.ageRestriction) return;

    let cellCount = 0
    let rowCount = TblMovies.rows.length
    let row = TblMovies.insertRow(rowCount)
    row.id = Movie.name;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = Movie.ageRestriction

    cell = row.insertCell(cellCount++)
    let atag = document.createElement("a")
    atag.setAttribute("href", Movie.length)
    atag.innerText = Movie.name
    cell.appendChild(atag)


    cell = row.insertCell(cellCount++)
    let inpHrefPhoto = document.createElement("Enum")
    inpHrefPhoto.type = "Enum"
    inpHrefPhoto.setAttribute("value", Movie.categories)
    cell.appendChild(inpHrefPhoto)


    cell = row.insertCell(cellCount++)
    let img = document.createElement("img")
    img.setAttribute("src", Movie.photo)
    img.setAttribute("alt", "Billede")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
    cell.appendChild(img)

    //Edit knap, sender Movie til PUT
    cell = row.insertCell(cellCount++)
    let pbUpdate = document.createElement("button")
    pbUpdate.textContent = "Edit"
    pbUpdate.Classname = "buttonEdit"
    pbUpdate.addEventListener('click', function () {
        Movie.photo = inpHrefPhoto.value;
        Editmovie(Movie)
    })



    cell.appendChild(pbUpdate)

    //Delete knap, sender Movie til DELETE
    cell = row.insertCell(cellCount++)
    let pbDelete = document.createElement("button")
    pbDelete.textContent = "Delete"
    pbDelete.name = "buttondelete"
    pbDelete.addEventListener('click', function () {
        const rowdel = document.getElementById(Movie.name)
        rowdel.remove();
        deleteMovie(Movie)
    })
    cell.appendChild(pbDelete)

}

async function deleteMovie(Movie) {
    console.log("delete movie" + Movie.name)
}

async function Editmovie(Movie) {
    console.log(Movie.name)
    console.log(Movie)
    const response = await restEditMovie(Movie)
    console.log(response)
}

async function restEditMovie(Movie) {
    const url = "moviecreation.html" + Movie.name;
    const fetchOptions = {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: ""
    }
    const jsonString = JSON.stringify(Movie);
    fetchOptions.body = jsonString;
    //calls backend and wait for return
    const response = await fetch(url, fetchOptions);
    console.log(response);
    if (!response.ok) {
        console.log("Det gik ikke godt med edit");
    };
    return response;
}



function actionCreateTable() {
   // lstmovies.forEach(createTable)
    console.log("vi er i linje 101")
    console.log(ddMovies)
    const ix = ddMovies.selectedIndex
    const opt = ddMovies[ix].movie
    console.log(opt)
    createTable(opt)



}

pbCreateTable.addEventListener('click', actionCreateTable)

