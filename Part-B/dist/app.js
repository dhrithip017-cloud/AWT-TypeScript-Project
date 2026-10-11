"use strict";
const products = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 2499, quantity: 10 },
    { id: 2, name: "Notebook", category: "Stationery", price: 120, quantity: 0 },
    { id: 3, name: "Water Bottle", category: "Accessories", price: 350, quantity: 15 },
    { id: 4, name: "Desk Lamp", category: "Home", price: 899, quantity: 3 }
];
let nextId = 5;
const productList = document.getElementById("product-list");
const productCount = document.getElementById("product-count");
const unitCount = document.getElementById("unit-count");
const inventoryValue = document.getElementById("inventory-value");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const productForm = document.getElementById("product-form");
const emptyMessage = document.getElementById("empty-message");
const formMessage = document.getElementById("form-message");
function renderProducts() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    const filteredProducts = products.filter(product => {
        const matchesName = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesName && matchesCategory;
    });
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        let status = "In Stock";
        let statusClass = "status-in";
        if (product.quantity === 0) {
            status = "Out of Stock";
            statusClass = "status-out";
        }
        else if (product.quantity <= 5) {
            status = "Low Stock";
            statusClass = "status-low";
        }
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        nameCell.className = "product-name";
        nameCell.textContent = product.name;
        const categoryCell = document.createElement("td");
        const categoryTag = document.createElement("span");
        categoryTag.className = "category-tag";
        categoryTag.textContent = product.category;
        categoryCell.appendChild(categoryTag);
        const priceCell = document.createElement("td");
        priceCell.textContent = formatCurrency(product.price);
        const quantityCell = document.createElement("td");
        quantityCell.textContent = String(product.quantity);
        const statusCell = document.createElement("td");
        const statusTag = document.createElement("span");
        statusTag.className = `status ${statusClass}`;
        statusTag.textContent = status;
        statusCell.appendChild(statusTag);
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Remove";
        deleteButton.type = "button";
        deleteButton.addEventListener("click", () => {
            removeProduct(product.id);
        });
        actionCell.appendChild(deleteButton);
        row.append(nameCell, categoryCell, priceCell, quantityCell, statusCell, actionCell);
        productList.appendChild(row);
    });
    emptyMessage.style.display = filteredProducts.length === 0 ? "block" : "none";
    updateSummary();
}
function formatCurrency(amount) {
    return "₹" + amount.toLocaleString("en-IN", {
        maximumFractionDigits: 2
    });
}
function updateSummary() {
    const totalUnits = products.reduce((sum, product) => sum + product.quantity, 0);
    const totalValue = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    productCount.textContent = String(products.length);
    unitCount.textContent = String(totalUnits);
    inventoryValue.textContent = formatCurrency(totalValue);
}
function removeProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        renderProducts();
        formMessage.textContent = "Product removed successfully.";
    }
}
productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = document.getElementById("product-name");
    const categoryInput = document.getElementById("product-category");
    const priceInput = document.getElementById("product-price");
    const quantityInput = document.getElementById("product-quantity");
    const name = nameInput.value.trim();
    const category = categoryInput.value;
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    if (!name || !Number.isFinite(price) || price <= 0 ||
        !Number.isInteger(quantity) || quantity < 0) {
        formMessage.textContent = "Enter a name, a price above zero, and a valid quantity.";
        return;
    }
    products.push({
        id: nextId++,
        name,
        category,
        price,
        quantity
    });
    productForm.reset();
    formMessage.textContent = `${name} added successfully!`;
    renderProducts();
});
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
renderProducts();
