//Functions for changing the info displayed based on season 

window.addEventListener("load", loadAll)
document.getElementById("seasonSelector").value = 1;

//The 2 lines of code below only works on anime with at least 2 seasons
var infoCurrentSeason = document.getElementById("seasonSelector")
infoCurrentSeason.addEventListener("change", loadAll)

//Functions for switching between infomation pages

const infoMain = document.getElementById("titleInfo")
const infoEpisode = document.getElementById("titleEpisode")
const infoImage = document.getElementById("titleImage")
const infoVideo = document.getElementById("titleVideo")

infoMain.addEventListener("click", showInfo) 
infoEpisode.addEventListener("click", showEpisode) 
infoImage.addEventListener("click", showImage) 
infoVideo.addEventListener("click", showVideo)

function showInfo(){
	console.log("1a");
	videoRemove()
	if (infoCurrentSeason.value == 1){
		console.log("INFO ONE");
		document.getElementById("detailsSeasonOne").style.display = "block";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
}

function showEpisode(){
	console.log("2b");
	videoRemove()
	if (infoCurrentSeason.value == 1){
		console.log("EPISODE ONE");
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "block";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
}

function showImage(){
	console.log("3c")
	videoRemove()
	if (infoCurrentSeason.value == 1){
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "block";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
}

function showVideo(){
	console.log("4d")
	videoRemove()
	getVideoData()
	if (infoCurrentSeason.value == 1){
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "block";
	}
}
//Testing dataset
const dataSource = "../js/dataset.json"
//Live dataset
//const dataSource = "https://yongkokhong96.github.io/tenime/source/js/dataset.json"

//Load ALL
function loadAll(){
	console.log("Loading")
	getAnimeData()
	getCharacterData()
	getEpisodeData()
	getImageData()
	getVideoData()
	console.log("Loaded")
}

//Add sypnosis
function getAnimeData(){
	var animeDetails;
	fetch(dataSource).then(respond => respond.json())
	.then(info => animeDetails = info)
	.then(() => console.log(animeDetails["TitleOneSeasonOneAnimeData"]))
	.then(() => addSypnosis(animeDetails["TitleOneSeasonOneAnimeData"]))
}

function addSypnosis(data){
	var sypnosisElement = document.getElementById("synopsisPara")
	var titleElement = document.getElementById("animeTitle")
	console.log(data.TitleName)
	document.getElementById("pageHead").innerHTML = `${data[0].TitleName} - Tenime`
	titleElement.innerText = `${data[0].TitleName}`
	sypnosisElement.innerHTML += `${data[0].Sypnosis}`
}
//Generate characters for each season

function getCharacterData(){
	var currentSeason = infoCurrentSeason.value
	var characterDetails;
	var section;
	fetch(dataSource).then(respond => respond.json())
	.then(info => characterDetails = info)
	.then(section = charSeasonSelect(currentSeason))
	.then(() => addCharacters(characterDetails[section]))
	.then(() => linkAdder(characterDetails))
	//.then(() => console.log(characterDetails["CharacterData"]))
}

function charSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "TitleOneSeasonOneCharacterData"
	}
	return section
}

function addCharacters(data){
	var infoSection = document.getElementById("seasonOneCharacters");
	//var season = infoCurrentSeason.value
	infoSection.innerHTML = "";
	for(i in data){
		//console.log("Okay" + data)
		//console.log(data)
		var idGen = data[i].Name
		//idGen = idGen.split(" ").join("")
		//console.log(idGen)
		var characterSlot = `
			<div>
				<div class="character-slot">
					<img class=character-img src=${data[i].src}>
				</div>
				<button data-toggle="modal" data-target="#myModal" class="character-name" id ="${idGen}">${data[i].Name}</button>
			</div>
			`
		infoSection.innerHTML += characterSlot;
	}
}

function linkAdder(data){
	var characterElement = document.querySelectorAll(".character-name")
	for (i in characterElement){
		var modifyThis = document.getElementById(characterElement[i].id);
		modifyThis.setAttribute("onclick", `charInfo("${characterElement[i].id}")`);
		//console.log(modifyThis.id);
		//characterElement.addEventListener("click",charClick);
	}
}

function charInfo(characterName){
	var charDetails
	console.log(characterName + " Clicked")
	fetch(dataSource).then(respond => respond.json())
	.then(info => charDetails = info)
	.then(()=>characterInfoGet(charDetails["TitleOneSeasonOneCharacterData"], characterName))
	.then(()=>modalAssign())
}

//Info for character detail boxes
function characterInfoGet(incomingData, targetName){
	console.log(incomingData)
	console.log(targetName)
	var counter = 0;
	while (counter != incomingData.length){
		//console.log(incomingData[counter].Name)
		if (incomingData[counter].Name == targetName){
			console.log("Found " + targetName)
			var infoContain = Object.entries(incomingData[counter])
			console.log(infoContain.length)
			var counterTwo = 0
			while (counterTwo != infoContain.length){
				if (counterTwo == 0){
					var charImageLine = `
					<div id="myModal" class="modal-custom">
					<div class="modal-custom-content">
						<span id="modalClose" class="close">close</span>
						
						<div id="characterInfoBox">
							<img src =${infoContain[1][1]} class="character-info-image">
							<p class="character-info-name">${infoContain[counterTwo][1]}</p>
						</div>
					</div>
					</div>
					`
					var targetContainer = document.getElementById("charInfoContainer")
					targetContainer.innerHTML=""
					targetContainer.innerHTML+= charImageLine
				}
				else if (counterTwo != 1){
					console.log(infoContain[counterTwo][0] + ": " + infoContain[counterTwo][1])
					var charInfoLine = `
					<p>${infoContain[counterTwo][0]}: ${infoContain[counterTwo][1]}</p>
					`
					var targetContainer = document.getElementById("characterInfoBox")
					//var targetContainer = document.body
					console.log("HERE")
					targetContainer.innerHTML+= charInfoLine
				}
				counterTwo++;
			}
			var testSplit= infoContain[1]
			console.log(testSplit[0])
		}
		counter++;
	}
}

//Creating onclick functions for modal boxes on characters

function modalAssign(){
	console.log("modalAssign")
	var changeThis = document.getElementById(id="modalClose");
	//changeThis.setAttribute("onclick",closeModal);
	changeThis.onclick = closeModal;
}

function closeModal(){
	console.log("closeModal")
	var targetModal = document.getElementById(id="myModal")
	targetModal.style.display = "none"
	console.log("closed")
}

//Episode list generator

function getEpisodeData(){
	var episodeInfo
	fetch(dataSource).then(respond => respond.json())
	.then(info => episodeInfo = info["TitleOneSeasonOneEpisodeData"])
	.then(()=>addEpisodes(episodeInfo))
}

function addEpisodes(data){
	console.log(data)
	episodeListElement = document.getElementById("episodeListSeasonOne")
	for (i in data){
		var episodeRow = `
		<p class="episode-list-item">${data[i].Number}</p>
		<p class="episode-list-item">${data[i].Name}</p>
		<p class="episode-list-item"><a href="${data[i].Link}">Link</a></p>
		`
		episodeListElement.innerHTML += episodeRow
	}
}

//Image Tab generator

function getImageData(){
	var imageInfo
	fetch(dataSource).then(respond => respond.json())
	.then(info => imageInfo = info["TitleOneSeasonOneImageData"])
	.then(() => console.log(imageInfo))
	.then(() => addCover(imageInfo))
	.then(() => addImages(imageInfo))
}

function addImages(data){
	console.log(data)
	imageContainerElement = document.getElementById("imageContainerSeasonOne")
	for (i in data){
		var imageSlot = `<img class= "poster-image" src="${data[i].src}">`
		imageContainerElement.innerHTML += imageSlot
	}
}

function addCover(data){
	console.log(data)
	coverContainerElement = document.getElementById("coverContainerSeasonOne")
	coverContainerElement.innerHTML += `<img class="cover-img" src="${data[0].src}">`
}

//Video Tab generator

function getVideoData(){
	var videoInfo
	fetch("../js/dataset.json").then(respond => respond.json())
	.then(info => videoInfo = info["TitleOneSeasonOneVideoData"])
	.then(() =>addVideos(videoInfo))
}

function addVideos(data){
	videoContainerElement = document.getElementById("videoContainerSeasonOne")
	for (i in data){
		var videoSlot =`${data[i].fullEmbed}`
		videoContainerElement.innerHTML  += videoSlot
	}
}

//Prevent videos from continuing to play while the user is on other sections of webpage
function videoRemove(){
	var videoElement = document.getElementById("videoContainerSeasonOne")
	videoElement.innerHTML = ""
}