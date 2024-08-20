const cities = ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Pekanbaru'];
console.log(cities);

cities.splice(4, 1, 'Bogor');
console.log(cities);

cities.splice(3, 2, 'Depok', 'Bekasi');
console.log(cities);

cities.splice(0, 2, 'Denpasar', 'Semarang');
console.log(cities);