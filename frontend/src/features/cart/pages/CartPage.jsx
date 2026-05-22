import { Link } from 'react-router-dom'

import { useCart } from '@/features/cart/hooks/useCart'

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart()

  return (
    <main className="px-6 py-10">
      <section className="mb-10">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Pedido
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Carrinho
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Revise os itens selecionados antes de finalizar o pedido.
        </p>
      </section>

      {cartItems.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
          <p className="mb-6 text-zinc-400">Seu carrinho está vazio.</p>

          <Link
            to="/"
            className="inline-flex rounded-full bg-white px-5 py-2 font-semibold text-black transition hover:bg-zinc-200"
          >
            Ver produtos
          </Link>
        </div>
      ) : (
        <section className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="grid gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.productName}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.productName}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    Variação: {item.variantName}
                  </p>

                  <p className="mt-2 font-medium">
                    R$ {Number(item.price).toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  <div className="flex items-center rounded-full border border-zinc-700">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-4 py-2 text-zinc-300 transition hover:text-white"
                    >
                      -
                    </button>

                    <span className="min-w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="px-4 py-2 text-zinc-300 transition hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-zinc-500 underline transition hover:text-red-400"
                  >
                    Remover
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Resumo</h2>

            <div className="mt-6 space-y-3 border-b border-zinc-800 pb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-zinc-400">
                <span>Entrega</span>
                <span>A combinar</span>
              </div>
            </div>

            <div className="mt-6 flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="mt-6 flex w-full justify-center rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Finalizar pedido
            </Link>

            <button
              type="button"
              onClick={clearCart}
              className="mt-4 w-full text-sm text-zinc-500 underline transition hover:text-red-400"
            >
              Limpar carrinho
            </button>
          </aside>
        </section>
      )}
    </main>
  )
}

export default CartPage