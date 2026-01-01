import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"

function ShirtDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const shirt = products.find(item => item.id === id)

  if (!shirt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <img
        src={shirt.image}
        alt={shirt.name}
        className="w-full rounded-lg"
      />

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{shirt.name}</h1>
        <p className="text-xl mb-2">₹{shirt.price}</p>
        <p className="text-gray-600 mb-6">{shirt.description}</p>

        <button
          onClick={() => addToCart(shirt)}
          className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ShirtDetails

