function selectProduct(productName) {
  document.getElementById('selectedProduct').value = productName;
  document.getElementById('orderForm').scrollIntoView({ behavior: 'smooth' });
}

function sendToWhatsApp(event) {
  event.preventDefault();
