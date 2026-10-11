// 1. Function with a default discount of 10%

function calculateDiscount(
    price: number,
    discount: number = 10
): number {
    return price - (price * discount / 100);
}

console.log("Price after default discount:", calculateDiscount(1000));

console.log("Price after 20% discount:", calculateDiscount(1000, 20));


// 2. Apply bulk discount using map()

function applyBulkDiscount(prices: number[]): number[] {
    return prices.map(price => calculateDiscount(price));
}

const productPrices: number[] = [1000, 2000, 3000, 4000];

const discountedPrices: number[] = applyBulkDiscount(productPrices);

console.log("Original prices:", productPrices);
console.log("Discounted prices:", discountedPrices);


// 3. Block scope using let

for (let i = 1; i <= 3; i++) {
    console.log("Loop number:", i);
}

// The variable i is available only inside the loop.
// Uncommenting the next line would cause a TypeScript error.

// console.log(i);