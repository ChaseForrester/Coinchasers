import Link from "next/link";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export default function ShopAllPage() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
          Shop <span className="text-[var(--color-gold-500)]">All</span>
        </h1>
        <div className="h-1 w-24 bg-[var(--color-gold-500)]"></div>
        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          The complete Coinchasers collection. Essential gear for the modern hustler.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col">
            <div className="relative aspect-[4/5] bg-[var(--color-card)] overflow-hidden mb-4 border border-border group-hover:border-[var(--color-gold-500)] transition-colors">
              {product.isNew && (
                <div className="absolute top-4 left-4 bg-[var(--color-gold-500)] text-black text-xs font-bold uppercase tracking-wider px-2 py-1 z-10">
                  New
                </div>
              )}
              {/* Placeholder for Product Image */}
              <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <span className="text-neutral-700 font-bold uppercase tracking-widest text-sm">Image Coming Soon</span>
              </div>
            </div>
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1 group-hover:text-[var(--color-gold-500)] transition-colors line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2 capitalize">{product.category}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-lg font-bold text-white">${product.price}</span>
                <span className="text-[var(--color-gold-500)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
