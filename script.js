let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [
  {name:"Rose Bouquet", price:699},
  {name:"Chocolate Cake", price:499},
  {name:"Gift Box", price:899},
  {name:"Teddy Bear", price:399},
  {name:"Perfume Set", price:1299},
  {name:"Chocolate Combo", price:599}
];

function add(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  document.getElementById("count").innerText = cart.length;
}

function render(){
  const box = document.getElementById("products");

  let html = "";

  products.forEach(p=>{
    html += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="add('${p.name}', ${p.price})">Add to Cart</button>
      </div>
    `;
  });

  box.innerHTML = html;
  updateCart();
}

render();
