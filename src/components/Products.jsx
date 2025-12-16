import { motion } from "framer-motion"

const products = [
  {
    name: "Wireless Headphones",
    price: "₨5199",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    name: "Smart Watch",
    price: "₨3149",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    name: "Gaming Mouse",
    price: "₨979",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
  },
]

export default function Products() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur p-6 rounded-2xl hover:-translate-y-2 transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-44 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-semibold text-white">
                {p.name}
              </h3>

              <p className="text-primary mt-2 font-medium">
                {p.price}
              </p>

              <button className="mt-4 w-full bg-primary text-black px-4 py-2 rounded-lg font-medium hover:opacity-90">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
