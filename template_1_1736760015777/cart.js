document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', event => {
      const itemId = event.target.dataset.id;
      alert(`Item ${itemId} removed from the cart.`);
      event.target.closest('li').remove();
    });
  });
  