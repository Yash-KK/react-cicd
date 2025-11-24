import { useState } from "react"
import { Button } from "@/components/ui/button"

function App() {
  const [products, setProducts] = useState(null)
  const API_URL = import.meta.env.VITE_API_URL;

  const loadProducts = async () => {
    try {
      const res = await fetch(`${API_URL}/products`)
      const data = await res.json()

      setProducts(data.products)
    } catch (err) {
      console.error("Error fetching products", err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-white">
      <Button className="hover:bg-blue-800">CICD (V3)</Button>

      {/* NEW BUTTON */}
      <Button onClick={loadProducts} className="bg-black text-white">
        Load Products
      </Button>

      {/* OPTIONAL: display the JSON */}
      {products && (
        <pre className="mt-4 max-h-80 overflow-auto p-4 bg-gray-100 rounded-lg text-sm">
          {JSON.stringify(products, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default App
