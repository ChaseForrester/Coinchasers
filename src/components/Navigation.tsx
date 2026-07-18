"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Coins, Search, User } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left: Mobile Menu & Desktop Links */}
          <div className="flex-1 flex items-center">
            <button 
              className="md:hidden text-white hover:text-[var(--color-gold-500)] transition-colors mr-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="hidden md:flex space-x-8">
              <Link href="/shop" className="text-white hover:text-[var(--color-gold-500)] transition-colors text-sm uppercase tracking-widest font-bold">Shop</Link>
              <Link href="/category/clothes" className="text-white hover:text-[var(--color-gold-500)] transition-colors text-sm uppercase tracking-widest font-bold">Clothes</Link>
              <Link href="/category/accessories" className="text-white hover:text-[var(--color-gold-500)] transition-colors text-sm uppercase tracking-widest font-bold">Accessories</Link>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-[family-name:var(--font-anton)] text-3xl tracking-wide uppercase text-white group-hover:text-[var(--color-gold-500)] transition-colors">
                Coinchasers
              </span>
            </Link>
          </div>
          
          {/* Right: Icons */}
          <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
            <button className="text-white hover:text-[var(--color-gold-500)] transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-[var(--color-gold-500)] transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-[var(--color-gold-500)] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[var(--color-gold-500)] text-black text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-[var(--color-border)] px-4 py-6 space-y-4">
          <Link href="/shop" className="block text-white hover:text-[var(--color-gold-500)] text-xl font-[family-name:var(--font-anton)] tracking-wider" onClick={() => setIsOpen(false)}>SHOP ALL</Link>
          <Link href="/category/clothes" className="block text-white hover:text-[var(--color-gold-500)] text-xl font-[family-name:var(--font-anton)] tracking-wider" onClick={() => setIsOpen(false)}>CLOTHES</Link>
          <Link href="/category/accessories" className="block text-white hover:text-[var(--color-gold-500)] text-xl font-[family-name:var(--font-anton)] tracking-wider" onClick={() => setIsOpen(false)}>ACCESSORIES</Link>
        </div>
      )}
    </nav>
  );
}
