import { Link } from "react-router-dom"

function ShirtCard({ shirt }) {
  return (
    <Link to={`/shirts/${shirt.id}`} className="block">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
        <img
          src={shirt.image}
          alt={shirt.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold">{shirt.name}</h3>
          <p className="text-gray-600">₹{shirt.price}</p>
        </div>
      </div>
    </Link>
  )
}

export default ShirtCard
