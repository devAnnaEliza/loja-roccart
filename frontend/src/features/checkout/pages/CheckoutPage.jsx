import { Link } from 'react-router-dom'

import { storeConfig } from '@/config/store.config'
import { useCart } from '@/features/cart/hooks/useCart'

function CheckoutPage() {
  const { cartItems, subtotal } = useCart()

  function handleCheckout() {
    const phone = storeConfig.contact.whatsapp

    const itemsMessage = cartItems
      .map(
        (item) =>
          `- ${item.productName} | ${item.variantName} | Qtd: ${item.quantity} | R$ ${Number(item.price).toFixed(2)}`,
      )
      .join('%0A')

    const message = `Olá! Quero finalizar este pedido na ${storeConfig.name}:%0A%0A${itemsMessage}%0A%0ATotal: R$ ${subtotal.toFixed(2)}`

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <main className="px-6 py-10">
      <section className="mb-10">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Checkout
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Finalizar pedido
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Confira os itens antes de enviar o pedido pelo WhatsApp.
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
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
              >
                <h2 className="text-xl font-semibold">{item.productName}</h2>

                <div className="mt-3 space-y-1 text-sm text-zinc-400">
                  <p>Variação: {item.variantName}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Preço unitário: R$ {Number(item.price).toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <h2 className="text-xl font-semibold">Resumo do pedido</h2>

            <div className="mt-6 border-b border-zinc-800 pb-6">
              <div className="flex justify-between text-zinc-400">
                <span>Total</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="mt-6 w-full rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              Enviar pelo WhatsApp
            </button>

            <Link
              to="/cart"
              className="mt-4 block text-center text-sm text-zinc-500 underline transition hover:text-white"
            >
              Voltar ao carrinho
            </Link>
          </aside>
        </section>
      )}
    </main>
  )
}

export default CheckoutPage