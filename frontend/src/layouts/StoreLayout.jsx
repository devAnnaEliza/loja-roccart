import { Link, Outlet } from 'react-router-dom'

import { storeConfig } from '@/config/store.config'
import { useCart } from '@/features/cart/hooks/useCart'

function StoreLayout() {
  const { cartItems } = useCart()

  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 px-8 py-4">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            {storeConfig.name}
          </Link>

          <Link to="/cart" className="underline">
            Carrinho ({totalItems})
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl">
        <Outlet />
      </div>
    </div>
  )
}

export default StoreLayout