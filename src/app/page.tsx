import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coins, Star, CheckCircle, ShieldCheck, Zap, DollarSign, Copyright, Crown, Link2, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
          {/* We use a dark gradient background placeholder for the premium vibe since we don't have images yet */}
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 text-white leading-tight">
            Chase The <span className="text-[var(--color-gold-500)]">Coin</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Premium apparel for those who grind. Dress for the success you are chasing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/shop" 
              className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all hover-lift w-full sm:w-auto text-center"
            >
              Shop New Collection
            </Link>
            <Link 
              href="/category/clothes" 
              className="bg-transparent border border-white hover:border-[var(--color-gold-500)] text-white hover:text-[var(--color-gold-500)] px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-center"
            >
              Explore Clothing
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Essential Gear</h2>
            <div className="h-1 w-20 bg-[var(--color-gold-500)] mt-4"></div>
          </div>
          <Link href="/shop" className="hidden md:flex items-center gap-2 text-[var(--color-gold-500)] hover:text-[var(--color-gold-400)] font-bold uppercase text-sm tracking-wider transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1 */}
          <Link href="/category/clothes" className="group relative h-96 overflow-hidden bg-[var(--color-card)] block border border-border">
            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Apparel</h3>
              <p className="text-[var(--color-gold-500)] font-medium text-sm tracking-widest uppercase flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </Link>

          {/* Category 2 */}
          <Link href="/category/bags" className="group relative h-96 overflow-hidden bg-[var(--color-card)] block border border-border">
            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Bags</h3>
              <p className="text-[var(--color-gold-500)] font-medium text-sm tracking-widest uppercase flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </Link>

          {/* Category 3 */}
          <Link href="/category/pants" className="group relative h-96 overflow-hidden bg-[var(--color-card)] block border border-border">
            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Pants</h3>
              <p className="text-[var(--color-gold-500)] font-medium text-sm tracking-widest uppercase flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </Link>

          {/* Category 4 */}
          <Link href="/category/jumpers" className="group relative h-96 overflow-hidden bg-[var(--color-card)] block border border-border">
            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Jumpers</h3>
              <p className="text-[var(--color-gold-500)] font-medium text-sm tracking-widest uppercase flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Shop Now <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </Link>
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <Link href="/shop" className="flex items-center gap-2 text-[var(--color-gold-500)] hover:text-[var(--color-gold-400)] font-bold uppercase text-sm tracking-wider transition-colors">
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
      {/* Brand Model Section */}
      <section className="bg-[var(--color-card)] border-y border-border py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">
              <span className="text-[var(--color-gold-500)]">CoinChasers</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold tracking-widest text-[var(--color-gold-500)] mb-4">EST. 2016</p>
            <p className="text-lg text-gray-400 font-bold tracking-wider uppercase">
              From Nothing. For Everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <DollarSign className="w-12 h-12 text-[var(--color-gold-500)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-gold-500)] uppercase tracking-wider mb-2">The $ That Built Me</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  The same $ that's been with me through every high and low. It's more than a symbol - it's my story, my past, my future, my everything.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Copyright className="w-12 h-12 text-[var(--color-gold-500)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-gold-500)] uppercase tracking-wider mb-2">Interlocked CC</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Two C's locked in - representing focus, consistency and staying true to the chase. No breaks. No shortcuts.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Crown className="w-12 h-12 text-[var(--color-gold-500)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-gold-500)] uppercase tracking-wider mb-2">Built Different</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  This crown stands for overcoming, evolving and becoming the king of your own life. They doubted, we built.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <Link2 className="w-12 h-12 text-[var(--color-gold-500)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-gold-500)] uppercase tracking-wider mb-2">Unbreakable Drive</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  The chain around the edge represents endurance and resilience. Every link is a lesson. Every scar is progress.
                </p>
              </div>
            </div>

            <div className="flex gap-6 md:col-span-2 md:justify-center md:max-w-2xl md:mx-auto">
              <div className="flex-shrink-0">
                <Award className="w-12 h-12 text-[var(--color-gold-500)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--color-gold-500)] uppercase tracking-wider mb-2">Chase More</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  Not just money. Freedom. Legacy. Purpose. We don't stop at enough. We chase more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals / Trending Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Latest Drops</h2>
          <div className="h-1 w-24 bg-[var(--color-gold-500)] mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">Fresh out the vault. Limited stock on all new releases.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative aspect-square bg-[var(--color-card)] border border-border mb-6 overflow-hidden">
                <div className="absolute top-4 left-4 bg-[var(--color-gold-500)] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 z-10">
                  New
                </div>
                <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <span className="text-neutral-700 font-bold uppercase tracking-widest text-sm">Image {item}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-[var(--color-gold-500)] transition-colors">Exclusive Item 0{item}</h3>
              <p className="text-[var(--color-gold-500)] font-bold mt-2">$1{item}5.00</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link href="/shop" className="bg-transparent border border-[var(--color-gold-500)] text-[var(--color-gold-500)] hover:bg-[var(--color-gold-500)] hover:text-black px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all hover-lift">
            Shop All New Arrivals
          </Link>
        </div>
      </section>

      {/* Benefits / Why Us */}
      <section className="bg-[var(--color-card)] py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6 border border-neutral-800">
                <ShieldCheck className="w-8 h-8 text-[var(--color-gold-500)]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Premium Quality</h3>
              <p className="text-gray-400">Crafted from the finest materials. Built to withstand the hustle and outlast the competition.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6 border border-neutral-800">
                <Zap className="w-8 h-8 text-[var(--color-gold-500)]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Limited Runs</h3>
              <p className="text-gray-400">Exclusivity is our guarantee. Once a collection sells out, it never restocks. Stay rare.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6 border border-neutral-800">
                <CheckCircle className="w-8 h-8 text-[var(--color-gold-500)]" />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-3">Global Shipping</h3>
              <p className="text-gray-400">Ambition has no borders. We ship our premium gear worldwide with express tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-16 text-center text-white">Vouched By The Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-card)] p-8 border border-border relative">
            <div className="flex text-[var(--color-gold-500)] mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              "When I walk into a meeting wearing Coinchasers, the energy shifts. The fit, the quality, the subtle flex. It's the only brand that understands the entrepreneur lifestyle."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
              <div>
                <h4 className="font-bold text-white uppercase text-sm">Marcus T.</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Tech Founder</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-card)] p-8 border border-border relative">
            <div className="flex text-[var(--color-gold-500)] mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-300 italic mb-6 leading-relaxed">
              "I've bought luxury brands that cost triple what Coinchasers does, but this gear feels better and means more. It's for people who actually put in the work."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-full"></div>
              <div>
                <h4 className="font-bold text-white uppercase text-sm">Sarah J.</h4>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Real Estate Investor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Access / Newsletter */}
      <section className="relative py-32 overflow-hidden border-t border-border">
        <div className="absolute inset-0 bg-neutral-900 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white">
            Join The <span className="text-[var(--color-gold-500)]">Inner Circle</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Our drops sell out in minutes. Subscribe for VIP early access, exclusive discounts, and entrepreneurship insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL ADDRESS" 
              className="bg-black/50 border border-neutral-700 text-white px-6 py-4 flex-grow focus:outline-none focus:border-[var(--color-gold-500)] transition-colors uppercase tracking-widest text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all whitespace-nowrap"
            >
              Get Access
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
