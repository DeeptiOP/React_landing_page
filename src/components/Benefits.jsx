import { motion } from "framer-motion"
import { Truck, ShieldCheck, Star, Headphones } from "lucide-react"

const benefits = [
  {
    title: "Fast Delivery",
    desc: "Quick and reliable shipping across all major locations.",
    icon: Truck,
  },
  {
    title: "Secure Payment",
    desc: "Encrypted and trusted payment gateways for peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Products",
    desc: "Carefully selected products with premium build quality.",
    icon: Star,
  },
  {
    title: "24/7 Support",
    desc: "We’re always here to help, anytime you need us.",
    icon: Headphones,
  },
]

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur p-6 rounded-2xl hover:-translate-y-1 transition"
            >
              <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-primary flex items-center justify-center text-black">
                <b.icon size={24} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {b.title}
              </h3>

              <p className="text-sm text-gray-400">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
