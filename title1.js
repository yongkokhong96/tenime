var infoCurrentSeason = document.getElementById("seasonOne");
	infoCurrentSeason.addEventListener("change", changeSeason);

	function changeSeason(){
		console.log(infoCurrentSeason.value);
		if (infoCurrentSeason.value == 10){
			document.getElementById("info-s1").style.display = "block";
			document.getElementById("info-s2").style.display = "none";
			document.getElementById("info-s3").style.display = "none";
		}
		else if (infoCurrentSeason.value == 20){
			document.getElementById("info-s1").style.display = "none";
			document.getElementById("info-s2").style.display = "block";
			document.getElementById("info-s3").style.display = "none";
		}
		else if (infoCurrentSeason.value == 30){
			document.getElementById("info-s1").style.display = "none";
			document.getElementById("info-s2").style.display = "none";
			document.getElementById("info-s3").style.display = "block";
		}
	}