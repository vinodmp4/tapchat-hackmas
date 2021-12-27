var data = [];

function senddata(){
	var text = document.getElementById('inputbox').value;
	data.push(['me',text])
	document.getElementById('chatarea').innerHTML ='</br></br></br></br><center>Tap anywhere to Read</br>Hold anywhere to record</center></br>';
	for(var i=0;i<data.length;i++){
		if (data[i][0]==='me'){
			document.getElementById('chatarea').innerHTML += '<div id="me">'+data[i][1]+'</div></br>';
		}
		else{
			document.getElementById('chatarea').innerHTML += '<div id="you">'+data[i][1]+'</div></br>';
		}
	}
}

function readall(){
	for(var i=0;i<data.length;i++){
		if (data[i][0]==='me'){
			window.speechSynthesis.speak(new SpeechSynthesisUtterance('you said '+data[i][1]));
		}
		else{
			window.speechSynthesis.speak(new SpeechSynthesisUtterance('reply was '+data[i][0]));
		}
	}
}


