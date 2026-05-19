import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div>
        <img
          src={product.image}
          alt={product.name}
          width="200"
        />

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <strong>
          R$ {Number(product.price).toFixed(2)}
        </strong>
      </div>
    </Link>
  )
}

export default ProductCard