/*
  Practice 1: Create a Promise that simulates downloading a file. 
  The Promise should resolve with a success message after a 3-second delay if the download is successful, 
  and reject with an error message if the download fails.
*/



/*
  Practice 2: Create a Promise that mimics an API call to fetch user data. 
  The Promise should resolve with a simulated user object "{ name: 'John Doe', age: 30 }" after a 2-second delay. 
  How would you design this Promise, and what would the resolved output contain?
*/

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28
  }]

function getUserByName(name) {
    return new Promise ((resolve, reject) =>{
        const userFound = users.find((user) => user.name === name);
        setTimeout(() => {
            if (userFound) {
                resolve(userFound)
            } else {
                reject('User not found')
            }
        }, 2000);
    })
}

getUserByName("John Doe")
    .then((Response) => {
        console.log(Response);
    })
    .catch((error) => {
        console.log(error)
    });

const printUserByName = async (name) => {
    try {
        const user = await getUserByName(name);
        console.log(user);
    } catch (error) {
        console.log(error);
        
    }
}

printUserByName("John Doe");