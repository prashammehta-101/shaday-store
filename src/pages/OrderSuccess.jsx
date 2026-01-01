import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">Order Placed Successfully 🎉</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for shopping with SHADAY.  
        Your order has been placed and will be processed shortly.
      </p>

      <Link
        to="/shirts"
        className="bg-black text-white px-8 py-3 hover:bg-gray-900 transition"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderSuccess;
