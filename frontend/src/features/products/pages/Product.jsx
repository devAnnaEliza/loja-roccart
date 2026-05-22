import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useCart } from '@/features/cart/hooks/useCart'
import { getProductById } from '@/features/products/services/products.service'

function Product() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    async function loadProduct() {
      const data = await getProductById(id)
      setProduct(data)
      setLoading(false)
    }

    loadProduct()
  }, [id])

  if (loading) {
    return (
      <main className="px-6 py-10">
        <p className="text-zinc-400">Carregando produto...</p>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="px-6 py-10">
        <h1 className="text-3xl font-bold">Produto não encontrado.</h1>
      </main>
    )
  }

  const variants = product.variants || []

  function handleAddToCart() {
    if (!selectedVariant) return

    addToCart(product, selectedVariant)
    setFeedbackMessage('Produto adicionado ao carrinho com sucesso!')

    setTimeout(() => {
      setFeedbackMessage('')
    }, 3000)
  }

  return (
    <main className="px-6 py-10">
      <Link to="/" className="mb-8 inline-block text-sm text-zinc-400 underline">
        Voltar para produtos
      </Link>

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Produto
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 max-w-xl text-zinc-400">{product.description}</p>

          <strong className="mt-6 block text-3xl">
            R$ {Number(product.price).toFixed(2)}
          </strong>

          <section className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Selecione o tamanho
            </h3>

            <div className="flex flex-wrap gap-3">
              {variants.map((variant) => {
                const isSelected = selectedVariant?.id === variant.id

                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => {
                      setSelectedVariant(variant)
                      setFeedbackMessage('')
                    }}
                    className={`rounded-full border px-5 py-2 transition ${
                      isSelected
                        ? 'border-white bg-white text-black'
                        : 'border-zinc-700 text-white hover:border-zinc-400'
                    }`}
                  >
                    {variant.name}
                  </button>
                )
              })}
            </div>
          </section>

          <button
            type="button"
            disabled={!selectedVariant}
            onClick={handleAddToCart}
            className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Adicionar ao carrinho
          </button>

          {feedbackMessage && (
            <p className="mt-4 rounded-xl border border-emerald-900 bg-emerald-950/40 px-4 py-3 text-sm text-emerald-300">
              {feedbackMessage}
            </p>
          )}

          {!selectedVariant && (
            <p className="mt-4 text-sm text-zinc-500">
              Selecione uma variação antes de adicionar ao carrinho.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Product