"use strict";
const products = [
    { id: 1, name: "Headphones", price: 2499, quantity: 10, category: "Electronics" },
    { id: 2, name: "Notebook", price: 120, quantity: 0, category: "Stationery" },
    { id: 3, name: "Water Bottle", price: 350, quantity: 15, category: "Accessories" },
    { id: 4, name: "Keyboard", price: 1499, quantity: 5, category: "Electronics" }
];
function getAvailableProducts(items) {
    return items.filter(product => product.quantity > 0);
}
console.log("All Products:", products);
console.log("Available Products:", getAvailableProducts(products));
function applyDiscountToProducts(items, discount = 10) {
    return items.map(product => ({
        ...product,
        discount: discount,
        price: product.price - (product.price * discount / 100)
    }));
}
const discountedProducts = applyDiscountToProducts(products);
console.log("Discounted Products:", discountedProducts);
