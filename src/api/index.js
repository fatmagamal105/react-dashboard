const API_URL = "https://dummyjson.com";

export function getProducts(limit) {
  return fetch(`${API_URL}/products?limit=${limit}`).then((res) => res.json());
}

export function searchProducts(searchQuery) {
  return fetch(`${API_URL}/products/search?q=${searchQuery}`).then((res) =>
    res.json()
  );
}

export function getCategories() {
  return fetch(`${API_URL}/products/categories`).then((res) => res.json());
}

export function getCategory(selectedCategory) {
  return fetch(
    `https://dummyjson.com/products/category/${selectedCategory}`
  ).then((res) => res.json());
}

export function addNewProduct(body) {
  return fetch(`${API_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export function update(body,productId){
  fetch(`${API_URL}/products/${productId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}
export function deleteProduct(id){
  fetch( `${API_URL}/products/${id}`, {
  method: 'DELETE',
  })
  .then(res => res.json()).catch((err) => {
    console.log(err)
  })
}