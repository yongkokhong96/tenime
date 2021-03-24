//Functions for changing the info displayed based on season 

window.addEventListener("load", generateCharacters)
document.getElementById("seasonSelector").value = 1;
var infoCurrentSeason = document.getElementById("seasonSelector")
infoCurrentSeason.addEventListener("change", generateCharacters)


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
	if (infoCurrentSeason.value == 1){
		document.getElementById("detailsSeasonOne").style.display = "none";
		document.getElementById("episodesSeasonOne").style.display = "none";
		document.getElementById("imagesSeasonOne").style.display = "block";
		document.getElementById("videosSeasonOne").style.display = "none";
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
}

//Generate characters for each season

function generateCharacters(){
	var seasonDetails;
	fetch("https://yongkokhong96.github.io/tenime/title1CharData.json").then(respond => respond.json())
	.then(info => seasonDetails = info)
	.then(() => addCharacters(seasonDetails));
}

const noImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
var infoSection = document.getElementById("seasonOneCharacters");
var counter = 0

function addCharacters(data){
	counter = 0;
	
	var season = infoCurrentSeason.value
	infoSection.innerHTML = "";
	while(counter < data.length){
		console.log("Okay")
		var characterSlot = `
			<div>
				<div class="character-slot">
					<img class=character-img src=${data[counter].src}>
				</div>
				<p class="character-name">${data[counter].name}</p>
			</div>
			`
		infoSection.innerHTML += characterSlot;
		counter++
	}
}