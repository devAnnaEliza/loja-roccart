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
      <main className="py-8 sm:py-10">
        <p className="text-slate-400">Carregando produto...</p>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="py-8 sm:py-10">
        <h1 className="text-3xl font-bold">Produto não encontrado.</h1>
      </main>
    )
  }

  const variants = product.variants || []
  const defaultVariant = variants[0]

  const hasSelectableVariants =
    variants.length > 1 || variants[0]?.name !== 'Único'

  function handleAddToCart() {
    const variantToAdd = hasSelectableVariants
      ? selectedVariant
      : defaultVariant

    if (!variantToAdd) return

    addToCart(product, variantToAdd)

    setFeedbackMessage('Produto adicionado ao carrinho com sucesso!')

    setTimeout(() => {
      setFeedbackMessage('')
    }, 3000)
  }

  return (
    <main className="py-8 sm:py-10">
      <Link
        to="/"
        className="mb-8 inline-flex text-sm text-slate-400 underline transition hover:text-white"
      >
        Voltar para produtos
      </Link>

      <section className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/3 shadow-2xl shadow-black/20">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Produto
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            {product.description}
          </p>

          <strong className="mt-6 block text-3xl font-semibold text-slate-50">
            R$ {Number(product.price).toFixed(2)}
          </strong>

          {hasSelectableVariants && (
            <section className="mt-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Selecione o tamanho
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
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
                          ? 'border-white bg-white text-black!'
                          : 'border-white/10 bg-white/3 text-slate-200 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      {variant.name}
                    </button>
                  )
                })}
              </div>
            </section>
          )}

          <button
            type="button"
            disabled={hasSelectableVariants && !selectedVariant}
            onClick={handleAddToCart}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black! transition duration-200 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-40 sm:w-fit"
          >
            Adicionar ao carrinho
          </button>

          {feedbackMessage && (
            <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200 backdrop-blur-sm">
              {feedbackMessage}
            </p>
          )}

          {hasSelectableVariants && !selectedVariant && (
            <p className="mt-4 text-sm text-slate-500">
              Selecione uma variação antes de adicionar ao carrinho.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Product