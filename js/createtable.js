console.log("Vi er i CreateTable")

const pbCreateTable = document.getElementById("pbCreateTable")
const TblMovies = document.getElementById("TblMovies")

function CreateTable(Movie) {
    console.log(Movie.name)
    if (!Movie.movieId) return;

    let CellCount = 0
    let rowCount = TblMovies.rows.length
    let row = TblMovies.insertRow(rowCount)
    let cell = row.insertCell(CellCount++)
    Cell.innerHTML = TblMovies.name

    cell = row.insertCell(cellCount++)
    cell.innerHTML = Movie.name

}
function actionCreateTable(){
    firstmovies.forEach(CreateTable)
}
pbCreateTable.addEventListener('click', actionCreateTable)