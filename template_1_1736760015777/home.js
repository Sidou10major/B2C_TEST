document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', event => {
      // Get the parent product card element
      const productCard = event.target.closest('.product-card');
      // Get the product name from the h3 element
      const productName = productCard.querySelector('h3').textContent;
      alert(`${productName} added to the cart!`);
    });
  });