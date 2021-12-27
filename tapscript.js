function senddata(){
	var text = document.getElementById('inputbox').value;
	document.getElementById('chatarea').innerHTML += '<div id="me">'+text+'</div></br>';
	document.getElementById('chatarea').innerHTML += '<div id="you">hi</div></br>';
}


