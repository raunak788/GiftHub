let orders = JSON.parse(localStorage.getItem("orders") || "[]");

function renderOrders(){
  let box = document.getElementById("orders");
  box.innerHTML = "";

  if(orders.length === 0){
    box.innerHTML = "<p style='text-align:center;'>No Orders Yet 😢</p>";
    return;
  }

  orders.forEach((o, index) => {
    box.innerHTML += `
      <div class="card">
        <h3>Order ID: ${o.id}</h3>
        <p>📅 ${o.date}</p>
        <p>💰 Total: ₹${o.total}</p>

        <button onclick="viewOrder(${index})">View</button>
        <button onclick="deleteOrder(${index})">Delete</button>
      </div>
    `;
  });
}

function viewOrder(i){
  let o = orders[i];
  let items = o.items.map(p => p.name + " ₹" + p.price).join("\n");

  alert("Items:\n" + items);
}

function deleteOrder(i){
  orders.splice(i,1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

renderOrders();
