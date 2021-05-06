//using spread operator in arrays
//just like objects...arrays are also mutated
//so we create copies using the spread operator

const products=['mobiles','earphones'];

console.log(products);

//ways to add items/values into the array
products.push("charger");
console.log(products);

//updating the values using index
products[2]=("chargers");

console.log(products);

//creating copy using spread operator

const product_copy=[...products,"batteries","ipad"]
product_copy.push("ipod");

//noticing the difference
console.log("Copy",product_copy);
console.log("Orginal",products);