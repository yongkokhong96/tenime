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
