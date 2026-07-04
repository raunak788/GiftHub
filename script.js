const products = [
  { id: 1, name: "Red Roses Bouquet", category: "flowers", price: 499, img: "https://picsum.photos/200?1" },
  { id: 2, name: "Chocolate Cake", category: "cakes", price: 799, img: "https://picsum.photos/200?2" },
  { id: 3, name: "Gift Combo Box", category: "gifts", price: 999, img: "https://picsum.photos/200?3" },
  { id: 4, name: "Pink Lilies", category: "flowers", price: 599, img: "https://picsum.photos/200?4" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(filter = "all") {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(p => {
    list.innerHTML += `
      <div class="card">
        <img src="${p.img}" />
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
}

function filterCategory(cat) {
  displayProducts(cat);
}

document.getElementById("search").addEventListener("input", function(e){
  const value = e.target.value.toLowerCase();
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(value))
    .forEach(p => {
      list.innerHTML += `
        <div class="card">
          <img src="${p.img}" />
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `;
    });
});

displayProducts();
updateCart();
