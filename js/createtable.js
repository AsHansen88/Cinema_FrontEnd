console.log("Vi er i CreateTable")

const pbCreateTable = document.getElementById("pbCreateTable")
const TblMovies = document.getElementById("TblMovies")

function createTable(Movie) {
    console.log(Movie.name)
    if (!Movie.ageRestriction) return;

    let cellCount = 0
    let rowCount = TblMovies.rows.length
    let row = TblMovies.insertRow(rowCount)
    row.id = Movie.navn;

    let cell = row.insertCell(cellCount++)
    cell.innerHTML = Movie.ageRestriction

    cell = row.insertCell(cellCount++)
    let atag = document.createElement("a")
    atag.setAttribute("href", Movie.href)
    atag.innerText = Movie.name
    cell.appendChild(atag)

/*
    cell = row.insertCell(cellCount++)
    cell.innerHTML = Movie.region.navn
*/
    cell = row.insertCell(cellCount++)
    let inpHrefPhoto = document.createElement("input")
    inpHrefPhoto.type = "text"
    inpHrefPhoto.setAttribute("value", Movie.hrefPhoto)
    cell.appendChild(inpHrefPhoto)

    cell = row.insertCell(cellCount++)
    let img = document.createElement("img")
    img.setAttribute("src", Movie.hrefPhoto)
    img.setAttribute("alt", "hej")
    img.setAttribute("width", 150)
    img.setAttribute("height", 150)
    cell.appendChild(img)

    //Update knap, sender Movie til PUT
    cell = row.insertCell(cellCount++)
    let pbUpdate = document.createElement("button")
    pbUpdate.textContent = "Opdater"
    pbUpdate.className = "buttonupdate"
    pbUpdate.addEventListener('click', function () {
        Movie.hrefPhoto = inpHrefPhoto.value;
        updateKommune(Movie)
    })
    cell.appendChild(pbUpdate)

    //Delete knap, sender Movie til DELETE
    cell = row.insertCell(cellCount++)
    let pbDelete = document.createElement("button")
    pbDelete.textContent = "Delete"
    pbDelete.className = "buttondelete"
    pbDelete.addEventListener('click', function () {
        const rowdel = document.getElementById(Movie.navn)
        rowdel.remove();
        deleteKommune(Movie)
    })
    cell.appendChild(pbDelete)

}

async function deleteKommune(Movie) {
    console.log("slet kommune" + Movie.name)
}

async function updateKommune(Movie) {
    console.log(Movie.hrefPhoto)
    console.log(Movie)
    const response = await restUpdateKommune(Movie)
    console.log(response)
}

async function restUpdateKommune(Movie) {
    const url = "http://localhost:8080/Movies" + Movie.kode;
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
        console.log("Det gik ikke godt med update");
    };
    return response;
}



function actionCreateTable() {
    lstmovies.forEach(createTable)
}

pbCreateTable.addEventListener('click', actionCreateTable)

