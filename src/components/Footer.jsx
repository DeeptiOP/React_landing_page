import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h1 className="text-xl font-bold text-white mb-2">ShopVerse</h1>
          <p className="text-sm text-gray-400">
            Premium products with a modern shopping experience.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Shop</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2025 ShopVerse. All rights reserved.
      </div>
    </footer>
  )
}
