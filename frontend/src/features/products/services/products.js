const mockProducts = [
  {
    id: '1',
    name: 'Produto exemplo',
    price: 129.9,
    description: 'Produto inicial para validar a estrutura do StoreKit Core.',
    image: '/src/assets/hero.png',
    variants: ['P', 'M', 'G'],
  },
]

export async function getProducts() {
  return mockProducts
}

export async function getProductById(id) {
  return mockProducts.find((product) => product.id === id) || null
}