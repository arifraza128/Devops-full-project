// Load products from backend
async function loadProducts() {
  try {
    const res = await fetch("/api/products");
    const products = await res.json();

    const container = document.getElementById("product-list");

    if (container) {
      container.innerHTML = "";
      products.forEach(product => {
        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
          <img src="${product.image}" />
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">
            Add to Cart
          </button>
        `;

        container.appendChild(div);
      });
    }
  } catch (error) {
    console.log("Error loading products:", error);
  }
}

// Add product to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart!");
}

// Load cart items
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");

  if (container) {
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
      return;
    }

    let total = 0;
    container.innerHTML = "";

    cart.forEach(item => {
      total += item.price;
      container.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });

    container.innerHTML += `<h3>Total: ₹${total}</h3>`;
  }
}

// Clear cart after checkout
function clearCart() {
  localStorage.removeItem("cart");
  alert("Order Completed!");
  window.location.href = "index.html";
}

// Automatically load when page opens
loadProducts();
loadCart();
