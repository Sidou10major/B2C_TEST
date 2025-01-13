document.getElementById('checkout-form').addEventListener('submit', event => {
    event.preventDefault();
    alert('Order placed successfully!');
    // Optionally, redirect to a success page
    window.location.href = '/order-success';
  });
  