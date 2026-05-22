import { useEffect, useState } from 'react'

import { storeConfig } from '@/config/store.config'
import ProductCard from '@/features/products/components/ProductCard'
import { getProducts } from '@/features/products/services/products.service'

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
    <main className="px-6 py-10">
      <section className="mb-10">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Catálogo
        </p>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          {storeConfig.name}
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Produtos selecionados com compra rápida e atendimento direto pelo WhatsApp.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Home