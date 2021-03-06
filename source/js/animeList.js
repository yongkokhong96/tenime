//Testing dataset
const dataSource = "../js/dataset.json"
//Live dataset
//const dataSource = "https://yongkokhong96.github.io/tenime/source/js/dataset.json"

window.addEventListener("load", generateAnimeList)

function generateAnimeList(){
	var animeDetails;
	fetch(dataSource)
    .then(respond => respond.json())
	.then(info => animeDetails = info)
    .then(() => console.log(animeDetails))
    .then(() => animeListSort(animeDetails))
    //.then(() => console.log(animeDetails["AnimeListData"][0]["Title"]))
}

var sortTypeElement = document.getElementById("sortType")
sortTypeElement.value = "rating"
sortTypeElement.addEventListener("change",generateAnimeList)

var orderTypeElement = document.getElementById("orderType")
orderTypeElement.value = "up"
orderTypeElement.addEventListener("change",generateAnimeList)

function animeListSort(data){
    var sortTypeElement = document.getElementById("sortType")
    var animeListElement = document.getElementById("animeList")
    animeListElement.innerHTML = ``
    var currentSortType = sortTypeElement.value

    if (currentSortType == "rating"){
        sortByRating(data)
    }
    else if (currentSortType == "status"){
        sortByStatus(data)
    }
    else if (currentSortType == "name"){
        sortByName(data)
    }
}

function sortByRating(data){
    var sortingSource = data["AnimeListData"]
    var animeListElement = document.getElementById("animeList")
    var orderElement = document.getElementById("orderType")
    animeListElement.innerHTML = `
    <p class="list-header">No.</p>
    <p class="list-header">Title</p>
    <p class="list-header">Rating</p>
    <p class="list-header">Status</p>
    `
    console.log("BEFORE RATE")
    console.log(sortingSource)
    if (orderElement.value == "up"){
        sortingSource.sort(function(a, b){ return b["Rating"]-a["Rating"]})
    }
    else if (orderElement.value == "down"){
        sortingSource.sort(function(a, b){ return a["Rating"]-b["Rating"]})
    }
    //var sortedRatingArray = sortingSource.sort(function(a, b){ return b["Rating"]-a["Rating"]})
    //console.log(sortedRatingArray)
    for(i in sortingSource){
        var animeEntry = `
        <p class="list-item">${parseInt(i)+1}</p>
		<p class="list-item"><a href="${sortingSource[i]["Link"]}">${sortingSource[i]["Title"]}</a></p>
        <p class="list-item">${sortingSource[i]["Rating"]}</p>
		<p class="list-item">${sortingSource[i]["Status"]}</p>
        `
        animeListElement.innerHTML += animeEntry
    }
    console.log("RATE")
    console.log(sortingSource)
}

function sortByStatus(data){
    var sortingSource = data["AnimeListData"]
    var animeListElement = document.getElementById("animeList")
    var orderElement = document.getElementById("orderType")
    animeListElement.innerHTML = `
    <p class="list-header">No.</p>
    <p class="list-header">Title</p>
    <p class="list-header">Rating</p>
    <p class="list-header">Status</p>
    `
    if (orderElement.value == "up"){
        sortingSource.sort(function(a, b){return b["Status"] > a["Status"]})
    }
    else if (orderElement.value == "down"){
        sortingSource.sort(function(a, b){return b["Status"] < a["Status"]})
    }
    //var sortedStatusArray = sortingSource.sort(function(a, b){return b["Status"] > a["Status"]})

    for(i in sortingSource){
        var animeEntry = `
        <p class="list-item">${parseInt(i)+1}</p>
		<p class="list-item"><a href="${sortingSource[i]["Link"]}">${sortingSource[i]["Title"]}</a></p>
        <p class="list-item">${sortingSource[i]["Rating"]}</p>
		<p class="list-item">${sortingSource[i]["Status"]}</p>
        `
        animeListElement.innerHTML += animeEntry
    }
    console.log("Status")
    console.log(sortingSource)
}

function sortByName(data){
    var sortingSource = data["AnimeListData"]
    var animeListElement = document.getElementById("animeList")
    var orderElement = document.getElementById("orderType")
    animeListElement.innerHTML = `
    <p class="list-header">No.</p>
    <p class="list-header">Title</p>
    <p class="list-header">Rating</p>
    <p class="list-header">Status</p>
    `
    if (orderElement.value == "up"){
        sortingSource.sort(function(a, b){ return b["Title"] < a["Title"]})
    }
    else if (orderElement.value == "down"){
        sortingSource.sort(function(a, b){ return b["Title"] > a["Title"]})
    }
    for(i in sortingSource){
        var animeEntry = `
        <p class="list-item">${parseInt(i)+1}</p>
		<p class="list-item"><a href="${sortingSource[i]["Link"]}">${sortingSource[i]["Title"]}</a></p>
        <p class="list-item">${sortingSource[i]["Rating"]}</p>
		<p class="list-item">${sortingSource[i]["Status"]}</p>
        `
        animeListElement.innerHTML += animeEntry
    }
    console.log("NAME")
    console.log(sortingSource)
}

function updateOrder(){
    animeListSort()
}