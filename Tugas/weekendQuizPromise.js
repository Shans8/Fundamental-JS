/*
  Quiz 1

  Requirements:
    - Create a function named `simplePromise` that returns a new promise.
    - Inside the promise, use `setTimeout` to simulate an asynchronous operation (like a delay of 2 seconds).
    - Resolve the promise with the message: "Promise resolved!" after the delay.

  Bonus:
    - Add an error condition using `Math.random()` to reject the promise with the message: "Promise rejected!" if the number is less than 0.5.
    - Use `.then()` and `.catch()` to handle the resolved and rejected cases.
*/

function simplePromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        console.log(randomNumber);
        setTimeout(() => {
            if (randomNumber < 0.5) {
                reject('Promise rejected!')
            }else {
                resolve('Promise resolved!')
            }
        }, 2000);
    })
}

simplePromise()
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

/*
  Quiz 2

  Requirements:
    - Create a function named `paramPromise` that returns a new promise.
    - The function will receive a parameter called `message`.
    - Inside the promise, use `setTimeout` to delay for 1 second, then resolve the promise with the `message`.

  Bonus:
    - If the `message` parameter is empty or not provided, reject the promise with the message: "No message provided!".
    - Implement `.finally()` to display a message "Operation complete" whether the promise is resolved or rejected.
*/

function paramPromise(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (message) {
        resolve(message);
      }else {
        reject('No message provided!');
      }

    }, 1000);
  })
}

paramPromise('haloooo')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Operation complete');
  })

/*
  Quiz 3

  Requirements:
    - Fetch any API you can use then print the data using `.then()`.
    - Handle the error by using `throw` and use `catch` to receive the error message.

  Bonus:
    - Manipulate the data you get from the API before printing it.
    - Using other API than the pokemon we used is much better.
*/

const id = '45';
const url = `https://api.adviceslip.com/advice/${id}`;

function fetchAdvice() {
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json()
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}

fetchAdvice()
/*
  Quiz 4

  Requirements:
    - Fetch any API you can use then print the data using `Async` / `Await`.
    - Handle the error by using `throw` and use `catch` to receive the error message.

  Bonus:
    - Manipulate the data you get from the API before printing it.
    - Using other API than the pokemon we used is much better.
*/

async function getAdvice(id) {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getAdvice(3);