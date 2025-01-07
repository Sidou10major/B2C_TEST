const variantSelect = document.getElementById('variant');
const priceDisplay = document.getElementById('price-display');

variantSelect.addEventListener('change', (event) => {
  const selectedOption = event.target.options[event.target.selectedIndex];
  const price = selectedOption.dataset.price;
  priceDisplay.textContent = `$${price}`;
});

document.getElementById('add-to-cart').addEventListener('click', () => {
  const selectedVariant = variantSelect.value;
  alert(`Variant ${selectedVariant} added to the cart!`);
});
