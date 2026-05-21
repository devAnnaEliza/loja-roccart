import { useEffect, useState } from 'react'

import { CartContext } from '@/features/cart/context/cart-context'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('storekit-cart')

    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem(
      'storekit-cart',
      JSON.stringify(cartItems),
    )
  }, [cartItems])

  function addToCart(product, variant) {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.productId === product.id &&
          item.variantId === variant.id,
      )

      if (existingItem) {
        return prev.map((item) =>
          item.id === existingItem.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        )
      }

      const newItem = {
        id: crypto.randomUUID(),
        productId: product.id,
        productName: product.name,
        image: product.image,
        price: product.price,
        variantId: variant.id,
        variantName: variant.name,
        quantity: 1,
      }

      return [...prev, newItem]
    })
  }

  function removeFromCart(itemId) {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== itemId),
    )
  }

  function increaseQuantity(itemId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseQuantity(itemId) {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}