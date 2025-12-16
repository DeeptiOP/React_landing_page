import { motion } from "framer-motion"
import { Laptop, Shirt, Watch, Home } from "lucide-react"

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Fashion",
    icon: Shirt,
    image:
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
  },
  {
    name: "Accessories",
    icon: Watch,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    name: "Home",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
]

export default function Categories() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={c.image}
                alt={c.name}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-300"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="h-12 w-12 rounded-xl bg-primary text-black flex items-center justify-center mb-3">
                  <c.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">
                  {c.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
