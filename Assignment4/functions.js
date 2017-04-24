// THIS SHOULD PLAY SOMETHING ON VOICEOVER/ OR THE PLAY BUTTON
function play(elem){


}

//THIS SHOULD DISPLAY RANDOM IMAGE, AND DISPLAY OPTIONS
function display(elem){
	var Amphibians = ['salamander', 'tadpole', 'frog'];
	var Mammals = ['monkey', 'lion', 'koala'];
	var Birds = ['hawk', 'robin', 'seagull'];
	var Fishes = ['carp', 'bluegill', 'trout'];
	var Reptiles = ['alligator', 'turtoise', 'snake'];
	var Arthropods = ['centipede', 'stickbug', 'tarantula'];

	if(elem.alt == 'amphibians'){
		var audio = new Audio('amphibians.mp3');
	}
	else if (elem.alt == 'mammals') {
		var audio = new Audio('mammals.mp3');
	}
	else if (elem.alt == 'birds') {
		var audio = new Audio('birds.mp3');
	}
	else if (elem.alt == 'fishes') {
		var audio = new Audio('fishes.mp3');
	}
	else if (elem.alt == 'reptiles') {
		var audio = new Audio('reptiles.mp3');
	}
	else if (elem.alt == 'arthropods') {
		var audio = new Audio('arthropods.mp3');
	}
	audio.addEventListener('ended', whatis);
	audio.play();
}

function whatis(){
	var what = new Audio('what.mp3');
	what.play();
}

function instruct(){
	var instruct = new Audio('select.mp3');
	instruct.play();
}
