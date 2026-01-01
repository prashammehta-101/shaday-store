import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import Shirts from "./pages/Shirts";
import ShirtDetails from "./pages/ShirtDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/shirts/:id" element={<ShirtDetails />} />
        <Route path="/cart" element={<Cart />} />

        {/* Protected routes */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="/order-success" element={<OrderSuccess />} />
      </Route>

      {/* Public routes */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

