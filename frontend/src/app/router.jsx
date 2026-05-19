import { createBrowserRouter } from 'react-router-dom'

import Home from '@/features/products/pages/Home'
import Product from '@/features/products/pages/Product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/product/:id',
    element: <Product />,
  },
])