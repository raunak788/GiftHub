let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(name, price){
  cart.push({name,price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
}
