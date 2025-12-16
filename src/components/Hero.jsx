import { motion } from 'framer-motion'

const features = [
  {
    title: 'Fast Delivery',
    desc: 'Get products delivered to your door in record time.',
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
  },
  {
    title: 'Premium Quality',
    desc: 'Carefully curated products with top-notch quality.',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    title: 'Secure Payments',
    desc: 'Your transactions are safe with industry-grade security.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 bg-gradient-to-br from-primary/30 to-accent/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Shop Smarter.
            <br />
            Live Better.
          </h1>
          <p className="text-gray-300 mb-8 max-w-md">
            Discover premium products with a clean, modern shopping experience built for speed and simplicity.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary px-8 py-4 rounded-xl font-semibold hover:opacity-90">
              Shop Now
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10">
              Explore
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            className="rounded-3xl object-cover h-64 w-full"
            alt="shopping"
          />
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            className="rounded-3xl object-cover h-64 w-full"
            alt="headphones"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-6 hover:bg-white/10"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
