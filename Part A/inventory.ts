// Product details using TypeScript data types

let productName: string = "Wireless Headphones";
let price: number = 2499;
let inStock: boolean = true;
let tags: string[] = ["electronics", "audio", "headphones"];

// Union type: productId can be either a number or a string
let productId: number | string = 101;

// Function to print product information
function printProductInfo(): void {
    console.log("Product Name:", productName);
    console.log("Price:", price);
    console.log("In Stock:", inStock);
    console.log("Tags:", tags);
    console.log("Product ID:", productId);
}

printProductInfo();


// Example of 'any'
let anyProduct: any = "This can be any type";

// Safer alternative: specifically typed variable
let typedProduct: string = "This is a string";

// Display the values
console.log("Any example:", anyProduct);
console.log("Typed example:", typedProduct);