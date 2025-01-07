const categoryFilter = document.getElementById('category');
const priceFilter = document.getElementById('price');
const searchInput = document.getElementById('search');
const productsGrid = document.querySelector('.products-grid');

function applyFilters() {
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const searchTerm = searchInput.value.toLowerCase();

  document.querySelectorAll('.product-card').forEach(card => {
    const productCategory = card.dataset.category;
    const productPrice = parseFloat(card.dataset.price);
    const productName = card.querySelector('h3').textContent.toLowerCase();

    const matchesCategory = !category || productCategory === category;
    const matchesPrice = !price || productPrice <= price;
    const matchesSearch = !searchTerm || productName.includes(searchTerm);

    if (matchesCategory && matchesPrice && matchesSearch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('input', applyFilters);
searchInput.addEventListener('input', applyFilters);
