"use strict";
// Product details using TypeScript data types
let productName = "Wireless Headphones";
let price = 2499;
let inStock = true;
let tags = ["electronics", "audio", "headphones"];
// Union type: productId can be either a number or a string
let productId = 101;
// Function to print product information
function printProductInfo() {
    console.log("Product Name:", productName);
    console.log("Price:", price);
    console.log("In Stock:", inStock);
    console.log("Tags:", tags);
    console.log("Product ID:", productId);
}
printProductInfo();
// Example of 'any'
let anyProduct = "This can be any type";
// Safer alternative: specifically typed variable
let typedProduct = "This is a string";
// Display the values
console.log("Any example:", anyProduct);
console.log("Typed example:", typedProduct);
