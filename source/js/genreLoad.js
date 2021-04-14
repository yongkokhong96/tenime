//Testing dataset
const dataSource = "../js/dataset.json"
//Live dataset
//const dataSource = "https://yongkokhong96.github.io/tenime/source/js/dataset.json"

window.addEventListener("load", loadAll)

function loadAll(){
    var genreList = getGenreData()
    genreButtons(genreList)
    console.log("Hello")
}

function getGenreData(){
    var genreDetails
	fetch(dataSource).then(respond => respond.json())
	.then(info => genreDetails = info["AnimeListData"])
    .then(() => loadGenres(genreDetails))
}

//Create an array of genres
function loadGenres(data){
    var genreList = []
    console.log(data)
    for (title in data){
        for (genre in data[title]["Genre"]){
            //console.log(data[title]["Genre"][genre])
            genreList.push(data[title]["Genre"][genre])
        }
    }
    //Remove duplicate entries
    var newSet = new Set(genreList)
    genreList = [...newSet]

    console.log(genreList)
    createGenres(genreList, data)
    genreButtons(genreList)

    for (title in data){
        for (genre in data[title].Genre){
            for (item in genreList){
                if (genreList[item] == data[title].Genre[genre]){
                    var targetID = `${genreList[item]}Container`
                    var targetTextElement = document.getElementById(targetID)
                    console.log(data[title]["Title"])
                    targetTextElement.innerHTML += `<p><a href=${data[title]["Link"]} id ="${data[title]["Title"]}">${data[title]["Title"]}</p>`
                }
            }
        }
    }
    
}


//Generate genre buttons and content
function createGenres(genreList, data){
    console.log(genreList)
    var targetContainer = document.getElementById("genreContainer")
    for (item in genreList){
        //var text = defineText(genreList[item],data)
        var genreElement = `
        <div class="genre-slot">
        <button class= "genre-button" id= "button${genreList[item]}">${genreList[item]}</button>
        <div class= "genre-text" id= "${genreList[item]}Container">
        <p id= "text${genreList[item]}"></p>
        </div>
        </div>
        `
        targetContainer.innerHTML+=genreElement
    }
}

//Add functions to buttons
function genreButtons(genreList){
    console.log("HELLO")
    for (item in genreList){
        console.log(genreList[item])
        var targetElement = document.getElementById(`button${genreList[item]}`)
        targetElement.setAttribute("onclick",`genreExpand("${genreList[item]}")`)
    }
}

//Toggle visibility of genre content [ON CLICK]
function genreExpand(item){
    console.log("Works" + item)
    var targetElement = document.getElementById(`${item}Container`)
    if (targetElement.style.display == "none"){
        targetElement.style.display = "block"
    }
    else if (targetElement.style.display = "block"){
        targetElement.style.display = "none"
    }
}