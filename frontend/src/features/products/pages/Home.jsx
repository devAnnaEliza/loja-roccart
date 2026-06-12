import { useEffect, useState } from 'react'

import { homeConfig } from '../../../config/store/home.config'
import { getProducts } from '@/features/products/services/products.service'
import ProductCard from '@/features/products/components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch {
        setError('Não foi possível carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <main className="px-6 py-14">
      <section className="mb-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-ui mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#ea8506]">
            {homeConfig.hero.eyebrow}
          </p>

          <h1 className="font-ui max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#00174e] sm:text-6xl">
            {homeConfig.hero.title}
          </h1>

          <p className="font-body mt-6 max-w-xl text-base leading-8 text-[#6e6969] sm:text-lg">
            {homeConfig.hero.description}
          </p>
        </div>

        <aside className="rounded-4xl border border-[#00174e]/10 bg-white p-6 shadow-lg">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.3em] text-[#ea8506]">
            Manifesto
          </p>

          <p className="font-body mt-4 text-lg leading-8 text-[#00174e]">
            Reproduzindo o caráter de Cristo através da arte.
          </p>

          <p className="font-body mt-4 text-sm leading-7 text-[#6e6969]">
            Uma companhia criativa que transforma expressão, propósito e
            identidade em peças autorais.
          </p>
        </aside>
      </section>

      <section id="products">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.3em] text-[#ea8506]">
              Coleção
            </p>
            <h2 className="font-ui mt-2 text-2xl font-semibold text-[#00174e]">
              Primeira peça Roccart
            </h2>
          </div>
        </div>

        {loading && (
          <div className="rounded-3xl border border-[#00174e]/10 bg-white p-8 shadow-lg">
            <p className="font-body text-[#6e6969]">Carregando produtos...</p>
          </div>
        )}

        {!loading && error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-50 p-8 shadow-lg">
            <p className="font-ui font-medium text-red-700">{error}</p>
            <p className="font-body mt-2 text-sm text-red-500">
              Verifique se a API está rodando e tente novamente.
            </p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="rounded-3xl border border-[#00174e]/10 bg-white p-8 shadow-lg">
            <p className="font-ui font-medium text-[#00174e]">
              Nenhum produto disponível.
            </p>
            <p className="font-body mt-2 text-sm text-[#6e6969]">
              Os produtos cadastrados aparecerão aqui automaticamente.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Home