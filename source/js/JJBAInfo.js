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
		document.getElementById("info-s3").style.display = "none";
		document.getElementById("info-s4").style.display = "none";
		document.getElementById("info-s5").style.display = "none";
	}
	else if (infoCurrentSeason.value == 2){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "block";
		document.getElementById("info-s3").style.display = "none";
		document.getElementById("info-s4").style.display = "none";
		document.getElementById("info-s5").style.display = "none";
	}
	else if (infoCurrentSeason.value == 3){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "none";
		document.getElementById("info-s3").style.display = "block";
		document.getElementById("info-s4").style.display = "none";
		document.getElementById("info-s5").style.display = "none";
	}
	else if (infoCurrentSeason.value == 4){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "none";
		document.getElementById("info-s3").style.display = "none";
		document.getElementById("info-s4").style.display = "block";
		document.getElementById("info-s5").style.display = "none";
	}
	else if (infoCurrentSeason.value == 5){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "none";
		document.getElementById("info-s3").style.display = "none";
		document.getElementById("info-s4").style.display = "none";
		document.getElementById("info-s5").style.display = "block";
	}
	else{
		console.log("Something went wrong at changeSeason()")
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
	else if (infoCurrentSeason.value == 3){
		console.log("INFO THREE");
		document.getElementById("detailsSeasonThree").style.display = "block";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
	else if (infoCurrentSeason.value == 4){
		console.log("INFO FOUR");
		document.getElementById("detailsSeasonFour").style.display = "block";
		document.getElementById("episodesSeasonFour").style.display = "none";
		document.getElementById("imagesSeasonFour").style.display = "none";
		document.getElementById("videosSeasonFour").style.display = "none";
	}
	else if (infoCurrentSeason.value == 5){
		console.log("INFO FIVE");
		document.getElementById("detailsSeasonFive").style.display = "block";
		document.getElementById("episodesSeasonFive").style.display = "none";
		document.getElementById("imagesSeasonFive").style.display = "none";
		document.getElementById("videosSeasonFive").style.display = "none";
	}
	else if (infoCurrentSeason.value == 6){
		console.log("INFO SIX");
		document.getElementById("detailsSeasonSix").style.display = "block";
		document.getElementById("episodesSeasonSix").style.display = "none";
		document.getElementById("imagesSeasonSix").style.display = "none";
		document.getElementById("videosSeasonSix").style.display = "none";
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
	else if (infoCurrentSeason.value == 3){
		console.log("EPISODE THREE");
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "block";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
	else if (infoCurrentSeason.value == 4){
		console.log("EPISODE FOUR");
		document.getElementById("detailsSeasonFour").style.display = "none";
		document.getElementById("episodesSeasonFour").style.display = "block";
		document.getElementById("imagesSeasonFour").style.display = "none";
		document.getElementById("videosSeasonFour").style.display = "none";
	}
	else if (infoCurrentSeason.value == 5){
		console.log("EPISODE FIVE");
		document.getElementById("detailsSeasonFive").style.display = "none";
		document.getElementById("episodesSeasonFive").style.display = "block";
		document.getElementById("imagesSeasonFive").style.display = "none";
		document.getElementById("videosSeasonFive").style.display = "none";
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
	else if (infoCurrentSeason.value == 3){
		console.log("IMAGE THREE");
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "block";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
	else if (infoCurrentSeason.value == 4){
		console.log("IMAGE FOUR");
		document.getElementById("detailsSeasonFour").style.display = "none";
		document.getElementById("episodesSeasonFour").style.display = "none";
		document.getElementById("imagesSeasonFour").style.display = "block";
		document.getElementById("videosSeasonFour").style.display = "none";
	}
	else if (infoCurrentSeason.value == 5){
		console.log("IMAGE FIVE");
		document.getElementById("detailsSeasonFive").style.display = "none";
		document.getElementById("episodesSeasonFive").style.display = "none";
		document.getElementById("imagesSeasonFive").style.display = "block";
		document.getElementById("videosSeasonFive").style.display = "none";
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
	else if (infoCurrentSeason.value == 3){
		console.log("VIDEO THREE");
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "block";
	}
	else if (infoCurrentSeason.value == 4){
		console.log("VIDEO FOUR");
		document.getElementById("detailsSeasonFour").style.display = "none";
		document.getElementById("episodesSeasonFour").style.display = "none";
		document.getElementById("imagesSeasonFour").style.display = "none";
		document.getElementById("videosSeasonFour").style.display = "block";
	}
	else if (infoCurrentSeason.value == 5){
		console.log("VIDEO FIVE");
		document.getElementById("detailsSeasonFive").style.display = "none";
		document.getElementById("episodesSeasonFive").style.display = "none";
		document.getElementById("imagesSeasonFive").style.display = "none";
		document.getElementById("videosSeasonFive").style.display = "block";
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
		section = "JJBASeasonOneAnimeData"
	}
	else if(season == 2){
		section = "JJBASeasonTwoAnimeData"
	}
	else if(season == 3){
		section = "JJBASeasonThreeAnimeData"
	}
	else if(season == 4){
		section = "JJBASeasonFourAnimeData"
	}
	else if(season == 5){
		section = "JJBASeasonFiveAnimeData"
	}
	return section
}
function addSypnosis(data){
	
	var sypnosisElement = sypnosisElementSelect()
	var titleElement = document.getElementById("animeTitle")
	console.log("adding sypnosis" + sypnosisElement)
	titleElement.innerText = `${data[0].TitleName}`
	sypnosisElement.innerHTML = `${data[0].Sypnosis}`
}
//Generate characters for each season
function sypnosisElementSelect(){
	if (infoCurrentSeason.value == 1){
		return document.getElementById("synopsisParaSeasonOne")
	}
	else if (infoCurrentSeason.value == 2){
		return document.getElementById("synopsisParaSeasonTwo")
	}
	else if (infoCurrentSeason.value == 3){
		return document.getElementById("synopsisParaSeasonThree")
	}
	else if (infoCurrentSeason.value == 4){
		return document.getElementById("synopsisParaSeasonFour")
	}
	else if (infoCurrentSeason.value == 5){
		return document.getElementById("synopsisParaSeasonFive")
	}
}

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
		section = "JJBASeasonOneCharacterData"
	}
	else if(season == 2){
		section = "JJBASeasonTwoCharacterData"
	}
	else if(season == 3){
		section = "JJBASeasonThreeCharacterData"
	}
	else if(season == 4){
		section = "JJBASeasonFourCharacterData"
	}
	else if(season == 5){
		section = "JJBASeasonFiveCharacterData"
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
}

function linkAdder(data){
	var characterElement = document.querySelectorAll(".character-name")
	for (i in characterElement){
		var modifyThis = document.getElementById(characterElement[i].id);
		console.log(modifyThis)
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
		section = "JJBASeasonOneEpisodeData"
	}
	else if(season == 2){
		section = "JJBASeasonTwoEpisodeData"
	}
	else if(season == 3){
		section = "JJBASeasonThreeEpisodeData"
	}
	else if(season == 4){
		section = "JJBASeasonFourEpisodeData"
	}
	else if(season == 5){
		section = "JJBASeasonFiveEpisodeData"
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
}

//Image Tab generator

function getImageData(){
	var imageInfo
	var currentSeason = infoCurrentSeason.value
	var section
	fetch(dataSource).then(respond => respond.json())
	.then(section = imageSeasonSelect(currentSeason))
	.then(info => imageInfo = info[section])
	.then(() =>addImages(imageInfo))
}

function imageSeasonSelect(season){
	console.log("Season is " + season)
	var section
	if (season == 1){
		section = "JJBASeasonOneImageData"
	}
	else if(season == 2){
		section = "JJBASeasonTwoImageData"
	}
	else if(season == 3){
		section = "JJBASeasonThreeImageData"
	}
	else if(season == 4){
		section = "JJBASeasonFourImageData"
	}
	else if(season == 5){
		section = "JJBASeasonFiveImageData"
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
	else if (infoCurrentSeason.value == 3){
		return document.getElementById("imageContainerSeasonThree")
	}
	else if (infoCurrentSeason.value == 4){
		return document.getElementById("imageContainerSeasonFour")
	}
	else if (infoCurrentSeason.value == 5){
		return document.getElementById("imageContainerSeasonFive")
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
		section = "JJBASeasonOneVideoData"
	}
	else if(season == 2){
		section = "JJBASeasonTwoVideoData"
	}
	else if(season == 3){
		section = "JJBASeasonThreeVideoData"
	}
	else if(season == 4){
		section = "JJBASeasonFourVideoData"
	}
	else if(season == 5){
		section = "JJBASeasonFiveVideoData"
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
}

//Prevent videos from continuing to play while the user is on other sections of webpage
function videoRemove(){
	var videoElement = document.getElementById("videoContainerSeasonOne")
	videoElement.innerHTML = ""
}