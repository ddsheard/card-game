function Card (value, suit) {
  this.suit = suit;
  this.value = value;
}
// Card.prototype.toString = function () {
//   return `${this.value} of ${this.suit}`;
// }

let number = {
  1: 'ace',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seveen',
  8: 'eight',
  9: 'nine',
  10: 'ten'
}
console.log(number[3]);

Card.prototype.toString = function (cardToString){
  if ((this.value >= 1) || (this.value <=10)){//if statement -  is looking for if its numebrs
    return `${number[this.value]} of ${this.suit}`;
    console.log(number[this.value]);
  }
      console.log(this.value);
  return `${this.value} of ${this.suit}`;//looking for not numbers
}

module.exports = Card;
