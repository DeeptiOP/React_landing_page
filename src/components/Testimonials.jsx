import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Aman Verma",
    role: "Verified Buyer",
    text: "This feels like a real production store. Clean UI, fast load, and smooth interactions.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    text: "Loved the layout and animations. Everything feels intentional and modern.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Mehta",
    role: "Frontend Developer",
    text: "Great structure and spacing. This looks interview-ready and professional.",
    image:
      "https://randomuser.me/api/portraits/men/75.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                “{t.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
