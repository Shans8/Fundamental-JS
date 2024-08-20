const words = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
  
  // /* Expected Output:
  // apple
  // banana
  // cherry
  // date
  // elderberry
  // fig
  // grape
  // honeydew
  // kiwi
  // */
  
  // Ver 1
  for (const fruits of words) {
    for (const fruit of fruits) {
      console.log(fruit);
    }
  }
  
  // Ver 2
  for (let i = 0; i < words.length; i++) {
    const fruits = words[i];
    for (let j = 0; j < fruits.length; j++) {
      const fruit = fruits[j];
      console.log(fruit);
    }
  }
  
  // Ver 3
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      console.log(words[i][j]);
    }
  }
  
  // Listing Down
  let count = 0;
  for (const fruits of words) {
    for (const fruit of fruits) {
      count++;
      console.log(`${count}. ${fruit}`);
    }
  }
  
  // Write a nested loop to print each word along with its length.
  
  /* Expected Output:
  apple: 5
  banana: 6
  cherry: 6
  date: 4
  elderberry: 10
  fig: 3
  grape: 5
  honeydew: 8
  kiwi: 4
  */
  
  for (const fruits of words) {
    for (const fruit of fruits) {
      console.log(`${fruit}: ${fruit.length}`);
    }
  }
  
  // Write a nested loop to print the first letter of each word.
  
  /* Expected Output:
  a
  b
  c
  d
  e
  f
  g
  h
  k
  */
  
  for (const fruits of words) {
    for (const fruit of fruits) {
      console.log(fruit[0]);
    }
  }
  
  // Write a nested loop to print words that contain the letter 'e'.
  
  /* Expected Output:
  apple
  cherry
  elderberry
  grape
  honeydew
  */
  
  // const words = [
  //   ['apple', 'banana', 'cherry'],
  //   ['date', 'elderberry', 'fig'],
  //   ['grape', 'honeydew', 'kiwi']
  // ];
  
  for (const fruits of words) {
    for (const fruit of fruits) {
      const targetLetter = 'e';
      let letterFound = false;
  
      for (const letter of fruit) {
        if (targetLetter === letter) {
          letterFound = true;
        }
      }
  
      if (letterFound === true && fruit !== 'date') {
        console.log(fruit);
      }
    }
  }
  
  const word = 'apple';
  const upperCaseWord = word.toUpperCase();
  console.log(upperCaseWord);
  
  /*
  [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
  [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
  [] --> []
  */
  
  const numbers = [1, -2, 3, -4, 5];
  let tempArray = [];
  
  for (const number of numbers) {
    if (number >= 0) {
      const invertedNumber = number - (number * 2);
      tempArray.push(invertedNumber);
    } else {
      const invertedNumber = number * -1;
      tempArray.push(invertedNumber);
    }
  }
  
  console.log(tempArray);