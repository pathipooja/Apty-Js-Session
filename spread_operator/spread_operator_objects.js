//object
const product = {
    id: 1,
    name: "Iphone 12"
}

function addKey(object_ref, key, value) {
    object_ref[key] = value;
}
//ways to add a new key to the object
const x = 'price'

//by enclosing key within the square brackets like we do in arrays
product['price'] = 100;
console.log(product);

//using dot operator
product.price = 200;
console.log(product);

//by enclosing a variable, which contains the key, within the square brackets 
product[x] = 1000;
console.log(product);

//function to add a new key to the object
addKey(product, 'price', 70000);

console.log(product);

//Till this point the object got mutated i.e since it is passed by reference the actual content of the object got modified each time the function is called
//Instead we can use spread operator to create a copy and make changes to that copy alone and preserve the orginal one
const product_copy = { ...product, 'id': 101 };
addKey(product_copy, 'category', 'mobile');
addKey(product_copy, 'brand', 'Apple');
console.log("Duplicate",product_copy);
console.log("Orginal",product);