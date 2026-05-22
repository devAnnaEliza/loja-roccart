import { createBrowserRouter } from 'react-router-dom'

import StoreLayout from '@/layouts/StoreLayout'

import Home from '@/features/products/pages/Home'
import Product from '@/features/products/pages/Product'
import CartPage from '@/features/cart/pages/CartPage'
import CheckoutPage from '@/features/checkout/pages/CheckoutPage'

export const router = createBrowserRouter([
  {
    element: <StoreLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/checkout',
        element: <CheckoutPage />,
      },
    ],
  },
])