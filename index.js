const cards = ["Ada", "Brendan", "Ali"] ;
const suprise = ["birthday"]

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {

  
    console.log(`Thank you, ${cards[i]} for the wonderful ${suprise} gift!`);
    debugger;
  }

  return cards;
}

 writeCards(cards);


 let countup = 0;
 while (countup < 10) {
   console.log(countup++);
 }
