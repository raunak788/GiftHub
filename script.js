let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  updateCart();
}

function updateCart() {
  document.getElementById("count").innerText = cart.length;

  let html = "";
  cart.forEach((item, i) => {
    html += `<p>${item.name} - ₹${item.price} <button onclick="removeItem(${i})">X</button></p>`;
  });

  document.getElementById("cartItems").innerHTML = html;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function openCart() {
  document.getElementById("cart").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("active");
}
