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
	fetch("https://yongkokhong96.github.io/tenime/source/js/dataset.json").then(respond => respond.json())
	.then(info => seasonDetails = info)
	.then(() => addCharacters(seasonDetails["TitleOneCharacterData"]))
	.then(() => linkAdder(seasonDetails))
}

const noImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
var infoSection = document.getElementById("seasonOneCharacters");
var counter = 0

function addCharacters(data){
	counter = 0;
	
	var season = infoCurrentSeason.value
	infoSection.innerHTML = "";
	while(counter < data.length){
		console.log("Okay" + data)
		console.log(data)
		var idGen = data[counter].Name
		//idGen = idGen.split(" ").join("")
		//console.log(idGen)
		var characterSlot = `
			<div>
				<div class="character-slot">
					<img class=character-img src=${data[counter].src}>
				</div>
				<button data-toggle="modal" data-target="#myModal" class="character-name" id ="${idGen}">${data[counter].Name}</button>
			</div>
			`
		infoSection.innerHTML += characterSlot;
		counter++
	}
}

function linkAdder(data){
	var characterElement = document.querySelectorAll(".character-name")
	var numberOfCharacters = characterElement.length
	var counter = 0;
	while (counter != numberOfCharacters){
		var modifyThis = document.getElementById(characterElement[counter].id);
		modifyThis.setAttribute("onclick", `charInfo("${characterElement[counter].id}")`);
		console.log(modifyThis.id);
		//characterElement.addEventListener("click",charClick);
		counter++;
	}
	console.log("Characters: " + numberOfCharacters)
}

function charInfo(test){
	var charDetails
	console.log(test + " Clicked")
	fetch("https://yongkokhong96.github.io/tenime/source/js/dataset.json").then(respond => respond.json())
	.then(info => charDetails = info)
	.then(()=>characterInfoGet(charDetails["TitleOneCharacterData"], test))
	.then(()=>modalAssign())
}

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
					<div id="myModal" class="modal">
					<div class="modal-content">
						<span id="modalClose" class="close">close</span>
						<img src =${infoContain[1][1]} class="character-info-image">
						<div id="characterInfoBox">
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
