const products = [
    { id: 1, name: 'samsung', price: 1000 },
    { id: 2, name: 'iphone', price: 900 },
    { id: 3, name: 'Redmi', price: 300 },
  ];
  
  let cart = {};
  
  const productList = document.getElementById('productList');
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${product.name} ($${product.price})</span>
      <div>
        <button class="remove" onclick="updateCart(${product.id}, 'remove')">-</button>
        <span id="quantity-${product.id}">0</span>
        <button class="add" onclick="updateCart(${product.id}, 'add')">+</button>
      </div>
    `;
    productList.appendChild(listItem);
  });
  
  // Update the cart
  function updateCart(productId, action) {
    if (action === 'add') {
      cart[productId] = (cart[productId] || 0) + 1;
    } else if (action === 'remove') {
      if (cart[productId]) {
        cart[productId]--;
        if (cart[productId] === 0) {
          delete cart[productId];
        }
      }
    }
    renderCart();
    updateQuantities();
  }
  
  function renderCart() {
    const cartContent = document.getElementById('cartContent');
    if (Object.keys(cart).length === 0) {
      cartContent.innerHTML = 'No Product added to the cart';
      return;
    }
  
    let cartHTML = '';
    let total = 0;
  
    for (const productId in cart) {
      const product = products.find(p => p.id === parseInt(productId));
      const quantity = cart[productId];
      const price = product.price * quantity;
      total += price;
  
      cartHTML += `
        <div class="cart-item">
          <span>${product.name} x ${quantity}</span>
          <span>$${price}</span>
        </div>
      `;
    }
  
    cartHTML += `<div class="total">Total: $${total}</div>`;
    cartContent.innerHTML = cartHTML;
  }
  
  // Update product quantities in the list
  function updateQuantities() {
    products.forEach(product => {
      const quantitySpan = document.getElementById(`quantity-${product.id}`);
      quantitySpan.textContent = cart[product.id] || 0;
    });
  }
  