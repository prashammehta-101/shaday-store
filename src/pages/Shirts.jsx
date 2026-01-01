import products from "../data/products"
import ShirtCard from "../components/ShirtCard"

function Shirts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Shirts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(shirt => (
          <ShirtCard key={shirt.id} shirt={shirt} />
        ))}
      </div>
    </div>
  )
}

export default Shirts

