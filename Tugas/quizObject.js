/*

Quiz 1: Create a new object named "person" then fill the properties with:
- firstName
- lastName
- address
  - country
  - city
- age

And then print the whole object

*/
const person = {
    firstName: 'Muhammad',
    lastName: 'Ihsan',
    address: {
        country: 'Indonesia',
        city: 'Tangsel'
    },
    age: 20
}
console.log(person);

person.address.country = 'Canada';
person.address.city = 'Jakarta';
console.log(person);

const man = {};

man.firstName = 'Ihsan';
man.lastName = 'Misbahuddin';
man.age = 20;

console.log(man);

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        console.log(value);
    }
}



/*

Quiz 2: Reassign the country and city into another value, then print the object

*/



/*

Quiz 3: Create a new object from empty object "{}", then start adding some properties

*/



/*

Quiz 4: Print each value by using forIn

*/



/*

Quiz 5: Print the whole value in one string

*/