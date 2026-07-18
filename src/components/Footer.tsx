import Link from "next/link";
import { Coins, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Coins className="w-8 h-8 text-[var(--color-gold-500)] group-hover:text-[var(--color-gold-400)] transition-colors" />
              <span className="font-bold text-2xl tracking-tighter uppercase text-white">
                Coinchasers
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Premium clothing for those who want to make money. Dress for success.
            </p>
            <div className="flex gap-4 mt-6 text-gray-400 text-sm flex-col">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4"/> 123 Hustle Ave, NY 10001</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4"/> +1 (555) 123-4567</span>
              <span className="flex items-center gap-2"><Mail className="w-4 h-4"/> contact@coinchasers.com</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/category/clothes" className="text-gray-400 hover:text-white transition-colors">Clothes</Link></li>
              <li><Link href="/category/bags" className="text-gray-400 hover:text-white transition-colors">Bags</Link></li>
              <li><Link href="/category/pants" className="text-gray-400 hover:text-white transition-colors">Pants</Link></li>
              <li><Link href="/category/shirts" className="text-gray-400 hover:text-white transition-colors">Shirts</Link></li>
              <li><Link href="/category/jumpers" className="text-gray-400 hover:text-white transition-colors">Jumpers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Support</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for exclusive drops and offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[var(--color-card)] border border-border text-white px-4 py-2 rounded focus:outline-none focus:border-[var(--color-gold-500)] transition-colors"
              />
              <button 
                type="button" 
                className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black font-bold py-2 px-4 rounded transition-colors uppercase tracking-wider text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Coinchasers. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
