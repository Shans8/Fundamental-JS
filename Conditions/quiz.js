const groceries = [15000, 30000, 50000, 100000, 500000]
let sum = 0;
for (let i = 0; i < groceries.length; i++) {
    sum += groceries[i];
}
console.log(sum, "basic for");

let grocery = 0;
for (const total of groceries) {
    grocery += total;
}
console.log(grocery, "forOf");

let price = 0;
for (const i in groceries) {
    price += groceries[i];    
}
console.log(price, "forIn");