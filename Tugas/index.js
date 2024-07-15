const word = 'Man';
const sentence = 'The man is playin football';
const paragraph = 'The man is sitting on the chair.';

console.log(word);
console.log(sentence);
console.log(paragraph);

const newSentence = word + sentence + paragraph;
console.log(newSentence);
console.log(word + sentence + paragraph);

const concat = word + sentence + paragraph;
console.log(concat);

const backtickConcat = `${word} ${sentence} ${paragraph}`;
console.log(backtickConcat);
