import { api } from '@/lib/api'

export async function getProducts() {
  const response = await api.get('/products/')
  return response.data
}

export async function getProductById(id) {
  const response = await api.get('/products/')
  const products = response.data

  return products.find((product) => String(product.id) === String(id))
}
