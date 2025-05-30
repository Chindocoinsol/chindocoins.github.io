let basket = [];

function addToBasket(token) {
  basket.push(token);
  updateBasketUI();
}

function updateBasketUI() {
  const ul = document.getElementById("basketList");
  ul.innerHTML = '';
  const uniqueTokens = [...new Set(basket)];
  uniqueTokens.forEach(token => {
    const count = basket.filter(t => t === token).length;
    ul.innerHTML += `<li>${token} (x${count})</li>`;
  });
}

function checkout() {
  alert("🛒 Checkout coming soon: Buy with VKTR, CHINDO, SOL, USDT, PayPal, or MoonPay!");
}
