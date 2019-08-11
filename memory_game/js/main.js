var cards = ["queen","queen","king","king","back"];
var cardsInPlay = [];


var card1=0, card2=0;

function flip(cardID){
	if (card1 == 0) {
		card1 = cards[cardID];
		cardsInPlay.push(card1);
	}else if (card2 == 0) {
		card2 = cards[cardID];
		cardsInPlay.push(card2);
		check();
	}
}

function check(){
	if (cardsInPlay.length > 2){
		console.log("overflow: array 'cardsInPlay'");
		resetCards(cardsInPlay);
	}
	if(cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("Win.");
			resetCards(cardsInPlay);
			card1 = resetCards(card1);
			card2 = resetCards(card2);
		}else if (cardsInPlay[0] != cardsInPlay[1]) {
			console.log("Lose.");
			resetCards(cardsInPlay);
			card1 = resetCards(card1);
			card2 = resetCards(card2);
		}
	}
}


function resetCards(set){
	if (typeof set == "object"){
		for (var i = 0; i < set.length; i++) {
			console.log(set);
			set.pop();
			set.pop();
			return;
		}
	}else if (typeof set == "string"){
		return 0;
	}
}