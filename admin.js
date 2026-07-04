let products = JSON.parse(localStorage.getItem("products") || "[]");
let orders = JSON.parse(localStorage.getItem("orders") || "[]");

/* =========================
   PRODUCT UPLOAD
========================= */
function addProduct(){
  let p = {
    id: Date.now(),
    name: document.getElementById("pname").value,
    price: parseInt(document.getElementById("pprice").value),
    img: document.getElementById("pimg").value,
    category: document.getElementById("pcat").value
  };

  products.push(p);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product Added ✅");
}

/* =========================
   ORDERS RENDER
========================= */
function renderOrders(){

  let filterDate = document.getElementById("filterDate").value;
  let list = document.getElementById("orders");

  list.innerHTML = "";

  let filtered = orders;

  if(filterDate){
    filtered = orders.filter(o => o.date.includes(filterDate));
  }

  if(filtered.length === 0){
    list.innerHTML = "<p>No Orders Found</p>";
    return;
  }

  filtered.forEach((o, i) => {

    let pincode = o.pincode || "N/A";

    list.innerHTML += `
      <div class="card">
        <h3>📦 Order ID: ${o.id}</h3>
        <p>📅 ${o.date}</p>
        <p>💰 ₹${o.total}</p>
        <p>📍 Pincode: ${pincode}</p>

        <button onclick="viewOrder(${i})">View Items</button>
        <button onclick="openMap('${pincode}')">Map</button>
        <button onclick="deleteOrder(${i})">Delete</button>
      </div>
    `;
  });
}

/* =========================
   VIEW ITEMS
========================= */
function viewOrder(i){
  let o = orders[i];
  alert(o.items.map(x => x.name + " ₹" + x.price).join("\n"));
}

/* =========================
   DELETE ORDER
========================= */
function deleteOrder(i){
  orders.splice(i,1);
  localStorage.setItem("orders", JSON.stringify(orders));
  renderOrders();
}

/* =========================
   GOOGLE MAP OPEN
========================= */
function openMap(pin){
  if(pin === "N/A") return alert("No Pincode");
  window.open(`https://www.google.com/maps/search/?api=1&query=${pin}`);
}

renderOrders();let orders = JSON.parse(localStorage.getItem("orders") || "[]");

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
