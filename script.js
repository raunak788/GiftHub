body {
  font-family: Arial;
  background: #f5f5f5;
  margin: 0;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: white;
}

.logo {
  font-size: 20px;
  color: #e91e63;
  font-weight: bold;
}

.cart-btn {
  background: #e91e63;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 20px;
}

.products {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 15px;
  padding: 20px;
}

.product {
  background: white;
  padding: 10px;
  border-radius: 10px;
}

.product img {
  width: 100%;
  border-radius: 10px;
}

button {
  background: #e91e63;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-top: 5px;
}

/* CART */
.cart {
  position: fixed;
  right: -300px;
  top: 0;
  width: 250px;
  height: 100%;
  background: white;
  padding: 20px;
  transition: 0.3s;
}

.cart.active {
  right: 0;
  }
