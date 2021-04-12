//Testing dataset
const dataSource = "../js/dataset.json"
//Live dataset
//const dataSource = "https://yongkokhong96.github.io/tenime/source/js/dataset.json"

window.addEventListener("load", loadAll)

function loadAll(){
    var genreList = getGenreData()
    genreButtons(genreList)
}

function getGenreData(){
    var genreDetails
	fetch(dataSource).then(respond => respond.json())
	.then(info => genreDetails = info["AnimeListData"])
    .then(() => loadGenres(genreDetails))
}

function loadGenres(data){
    var genreList = []
    var toCheck
    console.log(data)
    for (title in data){
        for (genre in data[title]["Genre"]){
            //console.log(data[title]["Genre"][genre])
            genreList.push(data[title]["Genre"][genre])
        }
    }
    var newSet = new Set(genreList)
    genreList = [...newSet]
    //removeDuplicates(genreList)
    console.log(genreList)
    createGenres(genreList)
}

function createGenres(genreList){
    var targetContainer = document.getElementById("genreContainer")
    for (item in genreList){
        var genreElement = `<button id ="genre${genreList[item]}">${genreList[item]}</button>`
        targetContainer.innerHTML+=genreElement
    }
}

function genreButtons(genreList){
    for (item in genreList){
        var addButtonTo = document.getElementById(genreList[item])
        addButtonTo.setAttribute("onclick",`genreExpand("${genreList[item]}")`)
    }
}