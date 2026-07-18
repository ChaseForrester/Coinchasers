"use client";

import { useFavorites } from "@/store/useFavorites";
import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="font-[family-name:var(--font-anton)] text-5xl md:text-7xl text-white uppercase tracking-wide mb-12">
        Your Favourites
      </h1>

      {favoriteProducts.length === 0 ? (
        <div className="text-center py-24 bg-[var(--color-card)] border border-border">
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-6" />
          <h2 className="text-2xl text-white font-bold uppercase tracking-wider mb-4">No favourites yet</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">You haven't saved any items yet. Browse our collection and click the heart icon to save your favorite pieces.</p>
          <Link href="/shop" className="bg-white text-black font-bold uppercase tracking-widest text-sm px-10 py-4 hover:bg-[var(--color-gold-500)] hover:text-white transition-colors inline-block">
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="group flex flex-col relative">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(product.id);
                }}
                className="absolute top-4 right-4 z-20 text-[var(--color-gold-500)] hover:scale-110 transition-transform bg-black/50 p-2 rounded-full"
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] bg-[#0a0a0a] overflow-hidden mb-4 border border-border">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${product.imageUrl}')` }} />
                </div>
                <div className="flex flex-col px-2">
                  <h3 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider line-clamp-1">{product.name}</h3>
                  <p className="text-gray-400 font-light mt-1">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
