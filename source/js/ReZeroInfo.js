//Anime page template file
//Supports up to 10 seasons, add/remove seasons when necessary
//Functions for changing the info displayed based on season 

window.addEventListener("load", loadAll)
document.getElementById("seasonSelector").value = 1;

//The 2 lines of code below only works on anime with at least 2 seasons
var infoCurrentSeason = document.getElementById("seasonSelector")
infoCurrentSeason.addEventListener("change", loadAll)

//Changing Seasons

function changeSeason(){
	console.log(infoCurrentSeason.value);
	if (infoCurrentSeason.value == 1){
		document.getElementById("info-s1").style.display = "block";
		document.getElementById("info-s2").style.display = "none";
	}
	else if (infoCurrentSeason.value == 2){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "block";
	}
	showInfo()
}

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
	else if (infoCurrentSeason.value == 2){
		console.log("INFO TWO");
		document.getElementById("detailsSeasonTwo").style.display = "block";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "none";
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
	else if (infoCurrentSeason.value == 2){
		console.log("EPISODE TWO");
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "block";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "none";
	}
}

function showImage(){
	console.log("3c")
	videoRemove()
	if (infoCurrentSeason.value == 1){
		console.log("IMAGE ONE");
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "block";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
	else if (infoCurrentSeason.value == 2){
		console.log("IMAGE TWO");
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "block";
		document.getElementById("videosSeasonTwo").style.display = "none";
	}
}

function showVideo(){
	console.log("4d")
	videoRemove()
	getVideoData()
	if (infoCurrentSeason.value == 1){
		console.log("VIDEO ONE");
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "block";
	}
	else if (infoCurrentSeason.value == 2){
		console.log("VIDEO TWO");
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "block";
	}
}

//Testing dataset
const dataSource = "../js/dataset.json"
//Live dataset
//const dataSource = "https://yongkokhong96.github.io/tenime/source/js/dataset.json"
//NOTE: Title names have to be changed manually

//Load ALL
function loadAll(){
	changeSeason()
	getAnimeData()
	getCharacterData()
	getEpisodeData()
	getImageData()
	getVideoData()
}

//Add sypnosis
function getAnimeData(){
	var currentSeason = infoCurrentSeason.value
	var animeDetails;
	var section;
	fetch(dataSource).then(respond => respond.json())
	.then(info => animeDetails = info)
	.then(section = animeSeasonSelect(currentSeason))
	.then(() => addSypnosis(animeDetails[section]))
}

//Loads anime data based on selected season
function animeSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "ReZeroSeasonOneAnimeData"
	}
	else if(season == 2){
		section = "ReZeroSeasonTwoAnimeData"
	}
	return section
}
function addSypnosis(data){
	var sypnosisElement = sypnosisElementSelect()
	var titleElement = document.getElementById("animeTitle")
	titleElement.innerText = `${data[0].TitleName}`
	sypnosisElement.innerHTML = `${data[0].Sypnosis}`
}

function sypnosisElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("synopsisParaSeasonOne")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("synopsisParaSeasonTwo")
	}
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
}

//Loads character data based on selected season
//Reuse this function for char info below
function charSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "ReZeroSeasonOneCharacterData"
	}
	else if(season == 2){
		section = "ReZeroSeasonTwoCharacterData"
	}
	else if(season == 3){
		section = "ReZeroSeasonThreeCharacterData"
	}
	else if(season == 4){
		section = "ReZeroSeasonFourCharacterData"
	}
	else if(season == 5){
		section = "ReZeroSeasonFiveCharacterData"
	}
	else if(season == 6){
		section = "ReZeroSeasonSixCharacterData"
	}
	else if(season == 7){
		section = "ReZeroSeasonSevenCharacterData"
	}
	else if(season == 8){
		section = "ReZeroSeasonEightCharacterData"
	}
	else if(season == 9){
		section = "ReZeroSeasonNineCharacterData"
	}
	else if(season == 10){
		section = "ReZeroSeasonTenCharacterData"
	}
	return section
}

function addCharacters(data){
	var infoSection = characterElementSelect()
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

function characterElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("seasonOneCharacters")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("seasonTwoCharacters")
	}
	else if (infoCurrentSeason.value == 3){
		return document.getElementById("seasonThreeCharacters")
	}
	else if (infoCurrentSeason.value == 4){
		return document.getElementById("seasonFourCharacters")
	}
	else if (infoCurrentSeason.value == 5){
		return document.getElementById("seasonFiveCharacters")
	}
	else if (infoCurrentSeason.value == 6){
		return document.getElementById("seasonSixCharacters")
	}
	else if (infoCurrentSeason.value == 7){
		return document.getElementById("seasonSevenCharacters")
	}
	else if (infoCurrentSeason.value == 8){
		return document.getElementById("seasonEightCharacters")
	}
	else if (infoCurrentSeason.value == 9){
		return document.getElementById("seasonNineCharacters")
	}
	else if (infoCurrentSeason.value == 10){
		return document.getElementById("seasonTenCharacters")
	}
	else{
		console.log("Something went wrong at characterElementSelect()")
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
	var currentSeason = infoCurrentSeason.value
	var charDetails;
	var section;
	console.log(characterName + " Clicked")
	fetch(dataSource).then(respond => respond.json())
	.then(info => charDetails = info)
	.then(section = charSeasonSelect(currentSeason))
	.then(()=>characterInfoGet(charDetails[section], characterName))
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
	var currentSeason = infoCurrentSeason.value
	var section
	fetch(dataSource).then(respond => respond.json())
	.then(section = episodeSeasonSelect(currentSeason))
	.then(info => episodeInfo = info[section])
	.then(()=>addEpisodes(episodeInfo))
}

function episodeSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "ReZeroSeasonOneEpisodeData"
	}
	else if(season == 2){
		section = "ReZeroSeasonTwoEpisodeData"
	}
	else if(season == 3){
		section = "ReZeroSeasonThreeEpisodeData"
	}
	else if(season == 4){
		section = "ReZeroSeasonFourEpisodeData"
	}
	else if(season == 5){
		section = "ReZeroSeasonFiveEpisodeData"
	}
	else if(season == 6){
		section = "ReZeroSeasonSixEpisodeData"
	}
	else if(season == 7){
		section = "ReZeroSeasonSevenEpisodeData"
	}
	else if(season == 8){
		section = "ReZeroSeasonEightEpisodeData"
	}
	else if(season == 9){
		section = "ReZeroSeasonNineEpisodeData"
	}
	else if(season == 10){
		section = "ReZeroSeasonTenEpisodeData"
	}
	return section
}

function addEpisodes(data){
	console.log(data)
	episodeListElement = episodeElementSelect()
	episodeListElement.innerHTML = `
	<p class="episode-list-header"></p>
	<p class="episode-list-header">Name</p>
	<p class="episode-list-header"></p>
	`
	for (i in data){
		var episodeRow = `
		<p class="list-item">${data[i].Number}</p>
		<p class="list-item">${data[i].Name}</p>
		<p class="list-item"><a href="${data[i].Link}">Link</a></p>
		`
		episodeListElement.innerHTML += episodeRow
	}
}

function episodeElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("episodeListSeasonOne")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("episodeListSeasonTwo")
	}
	else if (infoCurrentSeason.value == 3){
		return document.getElementById("episodeListSeasonThree")
	}
	else if (infoCurrentSeason.value == 4){
		return document.getElementById("episodeListSeasonFour")
	}
	else if (infoCurrentSeason.value == 5){
		return document.getElementById("episodeListSeasonFive")
	}
	else if (infoCurrentSeason.value == 6){
		return document.getElementById("episodeListSeasonSix")
	}
	else if (infoCurrentSeason.value == 7){
		return document.getElementById("episodeListSeasonSeven")
	}
	else if (infoCurrentSeason.value == 8){
		return document.getElementById("episodeListSeasonEight")
	}
	else if (infoCurrentSeason.value == 9){
		return document.getElementById("episodeListSeasonNine")
	}
	else if (infoCurrentSeason.value == 10){
		return document.getElementById("episodeListSeasonTen")
	}
	else{
		console.log("Something went wrong at characterElementSelect()")
	}
}

//Image Tab generator

function getImageData(){
	var imageInfo
	var currentSeason = infoCurrentSeason.value
	var section
	fetch(dataSource).then(respond => respond.json())
	.then(section = imageSeasonSelect(currentSeason))
	.then(info => imageInfo = info[section])
	.then(() => addCover(imageInfo))
	.then(() =>addImages(imageInfo))
}

function addCover(data){
	console.log(data)
	coverContainerElement = document.getElementById("coverContainer")
	coverContainerElement.innerHTML += `<img class="cover-img" src="${data[0].src}">`
}

function imageSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "ReZeroSeasonOneImageData"
	}
	else if(season == 2){
		section = "ReZeroSeasonTwoImageData"
	}
	return section
}

function addImages(data){
	imageContainerElement = imageElementSelect()
	imageContainerElement.innerHTML = ""
	for (i in data){
		var imageSlot = `<img class= "poster-image" src="${data[i].src}">`
		imageContainerElement.innerHTML += imageSlot
	}
}

function imageElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("imageContainerSeasonOne")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("imageContainerSeasonTwo")
	}
}

//Video Tab generator

function getVideoData(){
	var videoInfo
	var currentSeason = infoCurrentSeason.value
	var section
	fetch(dataSource).then(respond => respond.json())
	.then(section = videoSeasonSelect(currentSeason))
	.then(info => videoInfo = info[section])
	.then(() =>addVideos(videoInfo))
}

function videoSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "ReZeroSeasonOneVideoData"
	}
	else if(season == 2){
		section = "ReZeroSeasonTwoVideoData"
	}
	else if(season == 3){
		section = "ReZeroSeasonThreeVideoData"
	}
	else if(season == 4){
		section = "ReZeroSeasonFourVideoData"
	}
	else if(season == 5){
		section = "ReZeroSeasonFiveVideoData"
	}
	else if(season == 6){
		section = "ReZeroSeasonSixVideoData"
	}
	else if(season == 7){
		section = "ReZeroSeasonSevenVideoData"
	}
	else if(season == 8){
		section = "ReZeroSeasonEightVideoData"
	}
	else if(season == 9){
		section = "ReZeroSeasonNineVideoData"
	}
	else if(season == 10){
		section = "ReZeroSeasonTenVideoData"
	}
	return section
}

function addVideos(data){
	videoContainerElement = videoElementSelect()
	videoContainerElement.innerHTML = ""
	for (i in data){
		var videoSlot =`${data[i].fullEmbed}`
		videoContainerElement.innerHTML  += videoSlot
	}
}

function videoElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("videoContainerSeasonOne")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("videoContainerSeasonTwo")
	}
	else if (infoCurrentSeason.value == 3){
		return document.getElementById("videoContainerSeasonThree")
	}
	else if (infoCurrentSeason.value == 4){
		return document.getElementById("videoContainerSeasonFour")
	}
	else if (infoCurrentSeason.value == 5){
		return document.getElementById("videoContainerSeasonFive")
	}
	else if (infoCurrentSeason.value == 6){
		return document.getElementById("videoContainerSeasonSix")
	}
	else if (infoCurrentSeason.value == 7){
		return document.getElementById("videoContainerSeasonSeven")
	}
	else if (infoCurrentSeason.value == 8){
		return document.getElementById("videoContainerSeasonEight")
	}
	else if (infoCurrentSeason.value == 9){
		return document.getElementById("videoContainerSeasonNine")
	}
	else if (infoCurrentSeason.value == 10){
		return document.getElementById("videoContainerSeasonTen")
	}
	else{
		console.log("Something went wrong at characterElementSelect()")
	}
}

//Prevent videos from continuing to play while the user is on other sections of webpage
function videoRemove(){
	var videoElement = document.getElementById("videoContainerSeasonOne")
	videoElement.innerHTML = ""
}