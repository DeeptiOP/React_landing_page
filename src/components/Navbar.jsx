import { motion } from "framer-motion"
import { ShoppingCart, Menu, Search } from "lucide-react"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center font-bold text-black">
            S
          </div>
          <h1 className="text-xl font-bold text-white">ShopVerse</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">
          <a className="hover:text-white cursor-pointer">Home</a>
          <a className="hover:text-white cursor-pointer">Shop</a>
          <a className="hover:text-white cursor-pointer">About</a>
          <a className="hover:text-white cursor-pointer">Contact</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-sm">
            <Search size={16} />
            Search
          </button>

          <button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs flex items-center justify-center text-black">
              2
            </span>
          </button>

          {/* Mobile menu */}
          <button className="md:hidden p-2 rounded-lg bg-white/10">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
