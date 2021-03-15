var infoCurrentSeason = document.getElementById("selectedSeason");
infoCurrentSeason.addEventListener("change", changeSeason);

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

infoMain.addEventListener("click", showInfo) 
infoEpisode.addEventListener("click", showEpisode) 
infoImage.addEventListener("click", showImage) 
infoVideo.addEventListener("click", showVideo)

function showInfo(){
	console.log("1a");
	document.getElementById("info-s1").style.display = "block";
	document.getElementById("episodeAll").style.display = "none";
	document.getElementById("imageAll").style.display = "none";
	document.getElementById("videoAll").style.display = "none";
}

function showEpisode(){
	console.log("2b");
	document.getElementById("info-s1").style.display = "none";
	document.getElementById("episodeAll").style.display = "block";
	document.getElementById("imageAll").style.display = "none";
	document.getElementById("videoAll").style.display = "none";
}

function showImage(){
	console.log("3c")
	document.getElementById("info-s1").style.display = "none";
	document.getElementById("episodeAll").style.display = "none";
	document.getElementById("imageAll").style.display = "block";
	document.getElementById("videoAll").style.display = "none";
}

function showVideo(){
	console.log("4d")
	document.getElementById("info-s1").style.display = "none";
	document.getElementById("episodeAll").style.display = "none";
	document.getElementById("imageAll").style.display = "none";
	document.getElementById("videoAll").style.display = "block";
}
