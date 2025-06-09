// 加入購物車
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} 已加入購物車！`);
}

// 確認下單，儲存地址，跳轉購物車頁
function placeOrder() {
  const address = document.getElementById("address").value.trim();
  if (!address) {
    alert("請輸入外送地址！");
    return;
  }
  localStorage.setItem("deliveryAddress", address);
  window.location.href = "cart.html";
}

