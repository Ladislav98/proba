const PRODUCT_API_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const res = await fetch(`${PRODUCT_API_URL}`);
  if (!res.ok) throw new Error("Failed getting products");
  const data = await res.json();

  return data?.products;
}
