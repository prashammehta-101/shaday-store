import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to SHADAY
        </h2>

        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-black border border-gray-700 text-white"
        />

        <button className="w-full bg-white text-black py-3 font-semibold rounded">
          Continue
        </button>
      </form>
    </div>
  );
}

export default Login;

