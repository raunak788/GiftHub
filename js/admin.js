// Load products from LocalStorage
let products = JSON.parse(localStorage.getItem("products")) || [];

// Add Product
function addProduct() {

    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value.trim();
    const image = document.getElementById("image").value.trim();
    const category = document.getElementById("category").value;

    if (name === "" || price === "" || image === "") {
        alert("Please fill all fields.");
        return;
    }

    const product = {
        id: Date.now(),
        name,
        price,
        image,
        category
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";

    displayProducts();
}

// Display Products
function displayProducts() {

    const table = document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach((product) => {

        table.innerHTML += `
        <tr>

            <td>
                <img src="${product.image}" width="60">
            </td>

            <td>${product.name}</td>

            <td>₹${product.price}</td>

            <td>${product.category}</td>

            <td>
                <button onclick="deleteProduct(${product.id})">
                    Delete
                </button>
            </td>

        </tr>
        `;

    });

    document.getElementById("productCount").innerText = products.length;

}

// Delete Product
function deleteProduct(id) {

    if (confirm("Delete this product?")) {

        products = products.filter(product => product.id !== id);

        localStorage.setItem("products", JSON.stringify(products));

        displayProducts();

    }

}

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {

    alert("Logged Out!");

    window.location.href = "index.html";

});

// Load Products
displayProducts();
