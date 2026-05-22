import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 transition hover:border-zinc-700">
        <div className="aspect-square overflow-hidden bg-zinc-900">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-3 p-5">
          <div>
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm text-zinc-400">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <strong className="text-lg">
              R$ {Number(product.price).toFixed(2)}
            </strong>

            <span className="text-sm text-zinc-500">
              Ver produto
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default ProductCard