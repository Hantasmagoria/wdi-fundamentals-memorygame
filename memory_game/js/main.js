const cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png",
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png",
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png",
}];
var cardsInPlay = [];
var gameState = 0;
var card1=0, card2=0;

function showInstructions(){
	if (gameState){
		resetAll();
	}
	document.getElementById('game-board').innerHTML = "<div class='instructions'><p>Hit 'Game' to play or reset the game. </p></div>";
	gameState = 1;
}

function createBoard(){
	if (gameState){
		resetAll();
	}
	for (i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');
    	cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flip);
    	document.getElementById('game-board').appendChild(cardElement);
	}
	gameState = 1;
}

function flip(){
	var cardID = this.getAttribute('data-id');
	if (card1 == 0) {
		this.setAttribute('src',cards[cardID].cardImage);
		card1 = cards[cardID].rank;
		cardsInPlay.push(card1);
	}else if (card2 == 0) {
		this.setAttribute('src',cards[cardID].cardImage);
		card2 = cards[cardID].rank;
		cardsInPlay.push(card2);
		check();
	}
}

function check(){
	if(cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			resetCards(cardsInPlay);
			card1 = resetCards(card1);
			card2 = resetCards(card2);
		}else if (cardsInPlay[0] != cardsInPlay[1]) {
			alert("The cards did not match. Sorry, try again");
			unflip(card1);
			unflip(card2);
			resetCards(cardsInPlay);
			card1 = resetCards(card1);
			card2 = resetCards(card2);
		}
	}
}

function unflip(a){
	for(i=0;i<document.getElementById('game-board').childNodes.length;i++){
		if (document.getElementById('game-board').childNodes[i].getAttribute('src') != "images/back.png"){
			for(j=0;j<cards.length;j++){
				if(document.getElementById('game-board').childNodes[i].getAttribute('src') == cards[j].cardImage && a == cards[j].rank){
					document.getElementById('game-board').childNodes[i].setAttribute('src', "images/back.png");
				}
			}
		}
	}
}

function resetCards(set){
	if (typeof set == "object"){
		for (var i = 0; i < set.length; i++) {
			set.pop();
			set.pop();
			return;
		}
	}else if (typeof set == "string"){
		return 0;
	}
}

function resetAll(){
	document.getElementById('game-board').innerHTML = "";
	gameState = 0;
}