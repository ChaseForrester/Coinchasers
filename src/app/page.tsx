import Link from "next/link";
import Image from "next/image";
import { DollarSign, Copyright, Crown, Link2, Award, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function Home() {
  const latestDrops = products.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      
      {/* 1. Massive Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-zinc-900">
        {/* We would use a real image here. For now, a sleek gradient/texture placeholder */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat grayscale" />
        
        <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center mt-20">
          <h1 className="font-[family-name:var(--font-anton)] text-7xl md:text-[9rem] leading-[0.85] text-white uppercase tracking-tight mb-6 drop-shadow-2xl mix-blend-overlay">
            WINTER '24
          </h1>
          <p className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase mb-10 drop-shadow-md">
            The New Standard.
          </p>
          <Link href="/shop" className="bg-white text-black font-bold uppercase tracking-widest text-sm md:text-base px-10 py-4 hover:bg-[var(--color-gold-500)] hover:text-white transition-colors">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* 2. Collection Grid (Categories) */}
      <section className="w-full bg-black py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {/* Category 1 */}
          <Link href="/category/hoodies" className="group relative h-[60vh] overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1440&auto=format&fit=crop')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-8 left-8">
              <h2 className="font-[family-name:var(--font-anton)] text-5xl text-white uppercase tracking-wide">Hoodies</h2>
              <span className="text-white flex items-center gap-2 font-bold uppercase text-sm tracking-widest mt-2 group-hover:text-[var(--color-gold-500)] transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
          
          {/* Category 2 */}
          <Link href="/category/accessories" className="group relative h-[60vh] overflow-hidden bg-zinc-900 block">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611080928236-4c47864821fb?q=80&w=1440&auto=format&fit=crop')] bg-cover bg-center grayscale transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-8 left-8">
              <h2 className="font-[family-name:var(--font-anton)] text-5xl text-white uppercase tracking-wide">Accessories</h2>
              <span className="text-white flex items-center gap-2 font-bold uppercase text-sm tracking-widest mt-2 group-hover:text-[var(--color-gold-500)] transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Featured Products Grid (Latest Drops) */}
      <section className="py-24 bg-black w-full">
        <div className="px-4 mb-12 text-center md:text-left md:px-8 max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end">
          <h2 className="font-[family-name:var(--font-anton)] text-6xl text-white uppercase tracking-wide">Latest Drops</h2>
          <Link href="/shop" className="text-white hover:text-[var(--color-gold-500)] font-bold uppercase tracking-widest text-sm flex items-center gap-2 mt-4 md:mt-0 transition-colors">
            View All Drops <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4 px-1 sm:px-4 max-w-[1600px] mx-auto">
          {latestDrops.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col">
              <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden mb-4">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--color-gold-500)] opacity-20 group-hover:scale-110 transition-transform duration-700">
                  <span className="font-[family-name:var(--font-anton)] text-6xl">CC</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex justify-center">
                  <span className="bg-white text-black font-bold uppercase text-xs tracking-widest py-3 px-6 w-full text-center hover:bg-[var(--color-gold-500)] hover:text-white transition-colors">
                    Quick Add
                  </span>
                </div>
              </div>
              <div className="flex flex-col px-2">
                <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider line-clamp-1">{product.name}</h3>
                <p className="text-gray-400 font-light mt-1">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Full-Width Lookbook/Brand Image */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden bg-black my-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579362791837-975949d21eb1?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 mix-blend-overlay">
           <span className="font-[family-name:var(--font-anton)] text-[12rem] md:text-[20rem] text-white opacity-90 leading-none">C<span className="tracking-[-0.1em]">C</span></span>
        </div>
        <div className="relative z-30 text-center px-4 mt-auto pb-16">
          <Link href="/shop" className="border-2 border-white text-white font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-white hover:text-black transition-colors">
            Explore Lookbook
          </Link>
        </div>
      </section>

      {/* 5. Brand Model Section (Stark Typography) */}
      <section className="bg-black py-32 border-t border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="font-[family-name:var(--font-anton)] text-5xl md:text-7xl lg:text-8xl text-white uppercase tracking-wide mb-6">
              Coin<span className="text-[var(--color-gold-500)]">Chasers</span>
            </h2>
            <p className="text-xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase">
              From Nothing. For Everything.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 lg:gap-x-24">
            
            {/* The $ That Built Me */}
            <div className="flex flex-col items-center text-center group">
              <DollarSign className="w-16 h-16 text-[var(--color-gold-500)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white uppercase tracking-wider mb-4">The $ That Built Me</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
                The same $ that's been with me through every high and low. It's more than a symbol - it's my story, my past, my future, my everything.
              </p>
            </div>

            {/* Interlocked CC */}
            <div className="flex flex-col items-center text-center group">
              <Copyright className="w-16 h-16 text-[var(--color-gold-500)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white uppercase tracking-wider mb-4">Interlocked CC</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
                Two C's locked in - representing focus, consistency and staying true to the chase. No breaks. No shortcuts.
              </p>
            </div>

            {/* Built Different */}
            <div className="flex flex-col items-center text-center group">
              <Crown className="w-16 h-16 text-[var(--color-gold-500)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white uppercase tracking-wider mb-4">Built Different</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
                This crown stands for overcoming, evolving and becoming the king of your own life. They doubted, we built.
              </p>
            </div>

            {/* Unbreakable Drive */}
            <div className="flex flex-col items-center text-center group">
              <Link2 className="w-16 h-16 text-[var(--color-gold-500)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h3 className="font-[family-name:var(--font-anton)] text-3xl text-white uppercase tracking-wider mb-4">Unbreakable Drive</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light max-w-sm">
                The chain around the edge represents endurance and resilience. Every link is a lesson. Every scar is progress.
              </p>
            </div>

            {/* Chase More */}
            <div className="flex flex-col items-center text-center md:col-span-2 group mt-8">
              <Award className="w-20 h-20 text-[var(--color-gold-500)] mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
              <h3 className="font-[family-name:var(--font-anton)] text-4xl text-white uppercase tracking-wider mb-4">Chase More</h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light max-w-2xl mx-auto">
                Not just money. Freedom. Legacy. Purpose. We don't stop at enough. We chase more.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
