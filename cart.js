let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    container.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
