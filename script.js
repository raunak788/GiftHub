let cart = JSON.parse(localStorage.getItem("cart")) || [];

let products = [
  {name:"Rose Bouquet", price:699},
  {name:"Chocolate Cake", price:499},
  {name:"Gift Box", price:899}
];

function add(name,price){
  cart.push({name,price});
  localStorage.setItem("cart",JSON.stringify(cart));
  update();
}

function update(){
  document.getElementById("count").innerText = cart.length;

  let html = "";
  products.forEach(p=>{
    html += `
      <div style="background:white;margin:10px;padding:10px;border-radius:10px">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="add('${p.name}',${p.price})">Add</button>
      </div>
    `;
  });

  document.getElementById("products").innerHTML = html;
}

update();
