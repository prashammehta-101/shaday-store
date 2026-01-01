import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Your cart is empty</p>
      </div>
    )
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
      
      {/* Cart Items */}
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cartItems.map(item => (
          <div key={item.id} className="flex gap-4 border-b py-4">
            <img src={item.image} className="w-24 rounded" />

            <div className="flex-1">
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">₹{item.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 border"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 border"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="border rounded-lg p-6 h-fit">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-bold border-t pt-4 mt-4">
          <span>Total</span>
          <span>₹{subtotal}</span>
        </div>

        <Link
          to="/checkout"
          className="block text-center bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition"
        >
          Proceed to Checkout
        </Link>
      </div>

    </div>
  )
}

export default Cart


