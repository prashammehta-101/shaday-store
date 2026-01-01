import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useCart();

  // Total quantity (better than just length)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const { user, logout } = useAuth();

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          SHADAY
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm uppercase tracking-wide text-gray-300">
          <Link to="/shirts" className="hover:text-white transition">
            Shop
          </Link>

          <Link to="/cart" className="hover:text-white transition">
            Cart {totalItems > 0 && `(${totalItems})`}
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="hover:text-white transition uppercase text-sm"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-white transition">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
