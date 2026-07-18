import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[var(--color-border)] pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Newsletter Section - Very Prominent */}
        <div className="mb-20">
          <h2 className="font-[family-name:var(--font-anton)] text-4xl md:text-6xl text-white uppercase tracking-wide mb-4">Join The Inner Circle</h2>
          <p className="text-gray-400 mb-8 max-w-xl text-lg">Subscribe for early access to drops, exclusive content, and VIP treatment. We don't spam.</p>
          <form className="flex max-w-xl border-b-2 border-white pb-2 relative group">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-transparent text-white w-full focus:outline-none uppercase tracking-widest placeholder:text-gray-600 font-bold"
            />
            <button type="button" className="text-white group-hover:text-[var(--color-gold-500)] transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-[family-name:var(--font-anton)] text-5xl tracking-wide uppercase text-white group-hover:text-[var(--color-gold-500)] transition-colors">
                Coinchasers
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm uppercase tracking-widest text-sm font-bold">
              Premium apparel for those who wake up to secure the bag.
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-anton)] text-white text-2xl mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/shop" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Shop All</Link></li>
              <li><Link href="/category/clothes" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Clothes</Link></li>
              <li><Link href="/category/accessories" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-anton)] text-white text-2xl mb-6 uppercase tracking-wider">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-white uppercase tracking-widest text-xs font-bold transition-colors">Refunds & Returns</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Coinchasers. Built Different.
          </p>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/coinchasers/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/coinchasers_clothing?igsh=bG1xZzJ6eDIybThx" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
