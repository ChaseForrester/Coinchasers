"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Coins } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Coins className="w-8 h-8 text-[var(--color-gold-500)] group-hover:text-[var(--color-gold-400)] transition-colors" />
              <span className="font-bold text-2xl tracking-tighter uppercase">
                Coinchasers
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/shop" className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors font-medium">Shop All</Link>
            <Link href="/category/clothes" className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors font-medium">Clothes</Link>
            <Link href="/category/bags" className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors font-medium">Bags</Link>
            <Link href="/category/pants" className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors font-medium">Pants</Link>
            
            <button className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors relative ml-4">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[var(--color-gold-500)] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[var(--color-gold-500)] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button 
              className="text-gray-300 hover:text-[var(--color-gold-500)] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-6 space-y-4">
          <Link href="/shop" className="block text-gray-300 hover:text-[var(--color-gold-500)] text-lg font-medium" onClick={() => setIsOpen(false)}>Shop All</Link>
          <Link href="/category/clothes" className="block text-gray-300 hover:text-[var(--color-gold-500)] text-lg font-medium" onClick={() => setIsOpen(false)}>Clothes</Link>
          <Link href="/category/bags" className="block text-gray-300 hover:text-[var(--color-gold-500)] text-lg font-medium" onClick={() => setIsOpen(false)}>Bags</Link>
          <Link href="/category/pants" className="block text-gray-300 hover:text-[var(--color-gold-500)] text-lg font-medium" onClick={() => setIsOpen(false)}>Pants</Link>
        </div>
      )}
    </nav>
  );
}
