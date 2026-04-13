import { useEffect, useState } from 'react'
import { getProducts } from './services/products'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (err) {
        setError('Erro ao carregar produtos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) {
    return <h1>Carregando produtos...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      <h1>StoreKit Core</h1>

      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.imagem_url}
                alt={product.nome}
                width="200"
              />
              <h2>{product.nome}</h2>
              <p>{product.descricao}</p>
              <strong>R$ {Number(product.preco).toFixed(2)}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App