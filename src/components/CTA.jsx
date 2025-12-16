import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-primary to-accent text-black overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="relative max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to shop smarter?
        </h2>

        <p className="text-black/80 mb-8 text-lg">
          Join thousands of customers enjoying a clean, fast, and modern shopping experience.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-10 py-4 rounded-xl font-medium hover:opacity-90">
            Get Started
          </button>

          <button className="border border-black/20 px-10 py-4 rounded-xl hover:bg-black/10">
            Browse Products
          </button>
        </div>
      </motion.div>
    </section>
  )
}
