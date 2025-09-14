// Predefined Unsplash images per category (with format params to ensure they work)
// Predefined Unsplash + Bing images per category
// Predefined Unsplash + Bing images per category
const categoryImages = {
  electronics: [
    "https://images.unsplash.com/photo-1510552776732-01acc9a4c84f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    "https://tse3.mm.bing.net/th/id/OIP.VhWkuqcgqYrXRtpywv5l5AHaEy?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1587202372616-b7a5f5f8b4ec?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.lClqG2tRqa4RjFzKfQnXtgHaE8?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.RjM2F7YpK14UjOZg-F5jigHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1581091012184-38de79e6f1e7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1606813905480-0b3e6a8e7b13?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555617117-08d3f3f4012a?auto=format&fit=crop&w=400&q=80"
  ],
  clothing: [
    "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80",
    "https://tse2.mm.bing.net/th/id/OIP.zRtS3kDls7LXqx281oMgOgHaKG?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.wr1Q9y0tZgdpXt5wlCWR5gHaLH?pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th/id/OIP.cG7A1GQYRoI-TFTG37LQ9gHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1562158070-36f6a2c12c5b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1520975698516-40c1dbf7a0aa?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1579673008449-0cbe86d4f1e0?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1618354699962-8f0a1c7b2b9f?auto=format&fit=crop&w=400&q=80"
  ],
  books: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.9j0kj9e2UhR1jB6q-9MviAHaEt?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80",
    "https://tse3.mm.bing.net/th/id/OIP.LdD5gK6dJkV1V6L8QK9pwgHaE8?pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th/id/OIP.m8m1QY2W2INz0h6c7h9s7QHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?auto=format&fit=crop&w=400&q=80"
  ],
  home: [
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505691938896-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    "https://tse2.mm.bing.net/th/id/OIP.6dF-_Y0FYdjcyot4uaDFmgHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1505691938893-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1584622650111-993cd2449361?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.dMwcgNBYoE5X5AjpFMRF0QHaLH?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.L8aZ8jXcMtK2aO8H9H3ZdgHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505692794400-6d3b1565f92b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161b89a50?auto=format&fit=crop&w=400&q=80"
  ],
  toys: [
    "https://images.unsplash.com/photo-1601758123927-1965d7f17f7e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1625842291373-546dca2b87af?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1596464716127-e7b49b9d4d9f?auto=format&fit=crop&w=400&q=80",
    "https://tse4.mm.bing.net/th/id/OIP.tp7NEiO-ZFXzRoF2WO1jYgHaHa?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1584931423291-799a9d98efb5?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1614850523453-42dba4e7edc9?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.4AfV2hS7y7Fq0HjBd7n1hAHaHa?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.mNQyWzZ6qOeN8cM9RDb6igHaE7?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1598377080583-d0b3e86b5d41?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1616627989824-cc9b52ed2285?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1622332610297-3a08a8d14c02?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1622327711934-6f6a36f9b69f?auto=format&fit=crop&w=400&q=80"
  ],
  sports: [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1517649763961-1e27be8ac09a?auto=format&fit=crop&w=400&q=80",
    "https://tse3.mm.bing.net/th/id/OIP.8oycgHlo7DXObpZPyuGeQAHaDt?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1599058917212-d750089bc7c1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80",
    "https://tse1.mm.bing.net/th/id/OIP.o3vhQcsMPpudQ43aVxz9HgHaHa?pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th/id/OIP.1rMa0R91Koh9fW_YLxDq5AHaE8?pid=Api&P=0&h=180",
    "https://images.unsplash.com/photo-1554284126-3f309cbf7b9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1595433562696-016e41b7dc0d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1583454110557-c58a9c7a1f9e?auto=format&fit=crop&w=400&q=80"
  ]
};
// Categories
const categoryKeys = Object.keys(categoryImages);

// Generate 200 products
const products = Array.from({ length: 200 }, (_, i) => {
  const category = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
  const price = Math.floor(Math.random() * 900) + 10;
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const images = categoryImages[category];
  const image = images[i % images.length]; // cycle

  return {
    name: `${category.charAt(0).toUpperCase() + category.slice(1)} Product ${i + 1}`,
    category,
    price,
    rating: parseFloat(rating),
    image
  };
});

// DOM
const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

// Display all products
function displayProducts(items, reset = false) {
  if (reset) productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
    `;
    productList.appendChild(card);
  });
}

const searchInput = document.getElementById('searchInput');

function filterAndSort() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const price = priceFilter.value;
  const sort = sortOption.value;
  const searchText = searchInput.value.toLowerCase();

  // Category filter
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Price filter
  if (price === "low") {
    filtered = filtered.filter(p => p.price < 50);
  } else if (price === "mid") {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
  } else if (price === "high") {
    filtered = filtered.filter(p => p.price > 100);
  }

  // Search filter
  if (searchText) {
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(searchText) ||
        p.category.toLowerCase().includes(searchText) // ✅ search by category too
    );
  }

  // Sorting
  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered, true); // ✅ reset when filtering
}

// Event listeners
searchInput.addEventListener("input", filterAndSort);
categoryFilter.addEventListener("change", filterAndSort);
priceFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

// Initial render
displayProducts(products, true);
function displayProducts(items, reset = false) {
  if (reset) productList.innerHTML = "";
  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p class="category">${product.category}</p>
      <p class="price">$${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
    `;
    productList.appendChild(card);
  });
}

