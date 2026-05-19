import { useEffect, useState } from 'react'

import ProductCard from '@/features/products/components/ProductCard'
import { getProducts } from '@/features/products/services/products'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts()
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">StoreKit Core</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Home