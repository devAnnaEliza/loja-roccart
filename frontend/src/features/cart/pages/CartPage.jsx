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
    <main className="min-h-screen bg-black p-8 text-white">
      <h1 className="mb-8 text-4xl font-bold">Carrinho</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="mb-4 text-zinc-400">Seu carrinho está vazio.</p>
          <Link to="/" className="underline">
            Voltar para produtos
          </Link>
        </div>
      ) : (
        <section className="space-y-6">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="flex items-center gap-4 rounded border border-zinc-700 p-4"
            >
              <img
                src={item.image}
                alt={item.productName}
                className="h-20 w-20 object-cover"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p className="text-zinc-400">Variação: {item.variantName}</p>
                <p>R$ {Number(item.price).toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => decreaseQuantity(item.id)}
                  className="rounded border border-zinc-600 px-3 py-1"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQuantity(item.id)}
                  className="rounded border border-zinc-600 px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-400"
              >
                Remover
              </button>
            </article>
          ))}

          <div className="border-t border-zinc-700 pt-6">
            <p className="text-xl font-semibold">
              Subtotal: R$ {subtotal.toFixed(2)}
            </p>

            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={clearCart}
                className="rounded border border-zinc-600 px-4 py-2"
              >
                Limpar carrinho
              </button>

              <Link
                to="/checkout"
                className="rounded bg-white px-4 py-2 text-black"
                >
                Finalizar pedido
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default CartPage