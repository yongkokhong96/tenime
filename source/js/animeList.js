window.addEventListener("load", generateAnimeList)

function generateAnimeList(){
	var animeDetails;
	fetch("../js/dataset.json")
    .then(respond => respond.json())
	.then(info => animeDetails = info)
    .then(() => addAnime(animeDetails["AnimeListData"]))
    .then(() => console.log(animeDetails["AnimeListData"][0]["Title"]))
}

function addAnime(data){
    var counter = 0
    var animeListElement = document.getElementById("animeList")
    animeListElement.innerHTML = `
    <p class="list-header">Number</p>
    <p class="list-header">Title</p>
    <p class="list-header">Status</p>
    `
    while(counter < data.length){
        var animeEntry = `
        <p class="list-item">${data[counter]["DefaultNumberInList"]}</p>
		<p class="list-item"><a href="${data[counter]["Link"]}">${data[counter]["Title"]}</a></p>
		<p class="list-item">${data[counter]["Status"]}</p>
        `
        animeListElement.innerHTML += animeEntry
        counter++
    }
}