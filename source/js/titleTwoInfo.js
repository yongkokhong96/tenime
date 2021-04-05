//Functions for changing the info displayed based on season 

window.addEventListener("load", generateCharacters)
document.getElementById("seasonSelector").value = 1;
var infoCurrentSeason = document.getElementById("seasonSelector")
infoCurrentSeason.addEventListener("change", ()=>{
changeSeason();
generateCharacters();
})

function changeSeason(){
	console.log(infoCurrentSeason.value);
	if (infoCurrentSeason.value == 1){
		document.getElementById("info-s1").style.display = "block";
		document.getElementById("info-s2").style.display = "none";
		document.getElementById("info-s3").style.display = "none";
	}
	else if (infoCurrentSeason.value == 2){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "block";
		document.getElementById("info-s3").style.display = "none";
	}
	else if (infoCurrentSeason.value == 3){
		document.getElementById("info-s1").style.display = "none";
		document.getElementById("info-s2").style.display = "none";
		document.getElementById("info-s3").style.display = "block";
	}
}

//Functions for switching between infomation pages

const infoMain = document.getElementById("titleInfo")
const infoEpisode = document.getElementById("titleEpisode")
const infoImage = document.getElementById("titleImage")
const infoVideo = document.getElementById("titleVideo")

infoMain.addEventListener("click", () => {
	showInfo()
	generateCharacters()
}) 
infoEpisode.addEventListener("click", showEpisode)
infoImage.addEventListener("click", () => {
	showImage()
	generateImages();
}) 
infoVideo.addEventListener("click", showVideo)

function showInfo(){
	console.log("1a");
	if (infoCurrentSeason.value == 1){
		console.log("INFO ONE");
		document.getElementById("detailsSeasonOne").style.display = "block";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
	if (infoCurrentSeason.value == 2){
		console.log("INFO TWO");
		document.getElementById("detailsSeasonTwo").style.display = "block";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "none";
	}
	if (infoCurrentSeason.value == 3){
		console.log("INFO THREE");
		document.getElementById("detailsSeasonThree").style.display = "block";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
}

function showEpisode(){
	console.log("2b");
	if (infoCurrentSeason.value == 1){
		console.log("EPISODE ONE");
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "block";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
	if (infoCurrentSeason.value == 2){
		console.log("EPISODE TWO");
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "block";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "none";
	}
	if (infoCurrentSeason.value == 3){
		console.log("EPISODE THREE");
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "block";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
}

function showImage(){
	console.log("3c")
	if (infoCurrentSeason.value == 1){
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "block";
		document.getElementById("videosSeasonOne").style.display = "none";
	}
	if (infoCurrentSeason.value == 2){
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "block";
		document.getElementById("videosSeasonTwo").style.display = "none";
	}
	if (infoCurrentSeason.value == 3){
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "block";
		document.getElementById("videosSeasonThree").style.display = "none";
	}
}

function showVideo(){
	console.log("4d")
	if (infoCurrentSeason.value == 1){
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "none";
		document.getElementById("videosSeasonOne").style.display = "block";
	}
	if (infoCurrentSeason.value == 2){
		document.getElementById("detailsSeasonTwo").style.display = "none";
		document.getElementById("episodesSeasonTwo").style.display = "none";
		document.getElementById("imagesSeasonTwo").style.display = "none";
		document.getElementById("videosSeasonTwo").style.display = "block";
	}
	if (infoCurrentSeason.value == 3){
		document.getElementById("detailsSeasonThree").style.display = "none";
		document.getElementById("episodesSeasonThree").style.display = "none";
		document.getElementById("imagesSeasonThree").style.display = "none";
		document.getElementById("videosSeasonThree").style.display = "block";
	}
}

//Generate characters for each season
//S1: 8 S2:6  S3:12

function generateCharacters(){
	var seasonDetails;
	fetch("https://yongkokhong96.github.io/tenime/source/js/dataset.json").then(respond => respond.json())
	.then(info => seasonDetails = info)
	.then(() => addCharacters(seasonDetails));
}

const noImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
var infoSection = document.getElementById("seasonOneCharacters");
var counter = 0

function addCharacters(data){
	counter = 0;
	
	var season = infoCurrentSeason.value
	if (season == 1){
		infoSection = document.getElementById("seasonOneCharacters");
		season = data["Placeholder Character Images T2S1"]
		console.log(season)
	}
	if (season == 2){
		infoSection = document.getElementById("seasonTwoCharacters");
		season = data["Placeholder Character Images T2S2"]
		console.log(season)
	}
	if (season == 3){
		infoSection = document.getElementById("seasonThreeCharacters");
		season = data["Placeholder Character Images T2S3"]
		console.log(season)
	}
	infoSection.innerHTML = "";
	while(counter < season.length){
		var characterSlot = `
			<div>
				<div class="character-slot">
					<img class=character-img src=${season[counter].src}>
				</div>
				<p class="character-name">${season[counter].name}</p>
			</div>
			`
		infoSection.innerHTML += characterSlot;
		counter++
	}
}

//Generate images for poster section
//2 portrait | 2 landscape | 1 portrait, 1 landscape

function generateImages(){
	var imageDetails;
	fetch("https://yongkokhong96.github.io/tenime/source/js/dataset.json").then(respond => respond.json())
	.then(info => imageDetails = info)
	.then(() => addImages(imageDetails))
	.then(console.log(imageDetails));
}
var imgSection = document.getElementById("seasonOneImages");
var counter = 0

function addImages(data){
	counter = 0;
	var season = infoCurrentSeason.value
	if (season == 1){
		imgSection = document.getElementById("seasonOneImages");
		season = data["Placeholder Images T2S1"]
		console.log(season)
	}
	if (season == 2){
		imgSection = document.getElementById("seasonTwoImages");
		season = data["Placeholder Images T2S2"]
		console.log(season)
	}
	if (season == 3){
		imgSection = document.getElementById("seasonThreeImages");
		season = data["Placeholder Images T2S3"]
		console.log(season)
	}
	imgSection.innerHTML = "";
	while(counter < season.length){
		var characterSlot = `
		<img class="poster-image" src=${season[counter].src}>
			`
		imgSection.innerHTML += characterSlot;
		counter++
	}
}
