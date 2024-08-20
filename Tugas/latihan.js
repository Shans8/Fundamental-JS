const favoriteFruits = ['apple', 'orange', 'watermelon', 'grape'];
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ,'grape', 'honeydew', 'kiwi'];

// cari buah yang sama di kedua array
// objective: print buah yang sama

for (const fruit of fruits) {

    for (const favoriteFruit of favoriteFruits) {
        if (fruit === favoriteFruit)
        console.log(fruit);
    }
}