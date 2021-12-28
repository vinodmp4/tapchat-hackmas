var data = [];
var time1 = 0;
var time2 = 0;

function getresponse(inputtext){
	var responses = {"hi":["hi","hello","hai","hey","hai, How can i help you?"],
	"Hi":["hi","hello","hai","hey","hai, How can i help you?"],
	"hai":["hi","hello","hai","hey","hai, How can i help you?"],
	"hello":["hi","hello","hai","hey","hai, How can i help you?"],
	"hey":["hi","hello","hai","hey","hai, How can i help you?"],
	"help":["How can i help you?", "What can I do for you"],
	"good morning":["good morning","morning"],
	"how are you":["It's all good","I am doing well", "I am doing good"],
	"thanks":["Happy that I helped you","happy to know that"],
	"bye":["It was nice talking to you","bye"],
	"tell me about yourself":["I am a chatbot."]};
	var outputkeys = [];
	var output = "";
	var keywords = inputtext.split(" ");
	for (var i=0;i<keywords.length;i++){
	for (var pattern in responses){
			if (keywords[i].toLowerCase().includes(pattern.toLowerCase())){
			if (!(outputkeys.includes(pattern))){
				outputkeys.push(pattern);
			}
			}
			if (pattern.toLowerCase().includes(keywords[i].toLowerCase())){
			if (!(outputkeys.includes(pattern))){
				outputkeys.push(pattern);
			}
			}
		}}
	for (var j=0;j<outputkeys.length;j++){
		output = output + " "+responses[outputkeys[j]][Math.floor(Math.random() * responses[outputkeys[j]].length)];;
	}
	return output;
}

function senddata(){
	var text = document.getElementById('inputbox').value;
	document.getElementById('inputbox').value = '';
	if (text === ""){}
	else{
		data.push(['me',text,'unread']);
		data.push(['you',getresponse(text),'unread']);
	}
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
		if (data[i][2]==='unread'){
		data[i][2]='read';
		if (data[i][0]==='me'){
			window.speechSynthesis.speak(new SpeechSynthesisUtterance('you said '+data[i][1]));
		}
		else{
			window.speechSynthesis.speak(new SpeechSynthesisUtterance('reply was '+data[i][1]));
		}}
	}
}


