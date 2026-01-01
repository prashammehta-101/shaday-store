import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Your cart is empty.</h1>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    clearCart();                 // ✅ clear cart
    navigate("/order-success");  // ✅ redirect
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
      {/* Shipping Form */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3" />
          <input type="email" placeholder="Email" className="w-full border p-3" />
          <input type="text" placeholder="Address" className="w-full border p-3" />
          <input type="text" placeholder="City" className="w-full border p-3" />
          <input type="text" placeholder="Pincode" className="w-full border p-3" />

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="w-full bg-black text-white py-3 mt-4 hover:bg-gray-900"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="border p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm mb-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{getCartTotal()}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

