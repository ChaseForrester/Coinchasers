"use client";

import { useFavorites } from "@/store/useFavorites";
import { Heart, Share2, Link as LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProductActions({ productId, productUrl, productName }: { productId: string, productUrl: string, productName: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Coinchasers - ${productName}`,
          url: productUrl,
        });
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      // Fallback to copy link
      navigator.clipboard.writeText(productUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!mounted) return null;

  const fav = isFavorite(productId);

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex gap-4">
        <button className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black py-4 font-bold uppercase tracking-widest text-sm transition-all hover-lift flex-1">
          Add to Bag
        </button>
        <button 
          onClick={() => toggleFavorite(productId)}
          className={`border border-border flex items-center justify-center w-14 transition-colors ${fav ? 'text-[var(--color-gold-500)] border-[var(--color-gold-500)]' : 'text-white hover:border-[var(--color-gold-500)]'}`}
        >
          <Heart className={`w-5 h-5 ${fav ? 'fill-current' : ''}`} />
        </button>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Share</span>
        <button onClick={handleShare} className="text-gray-400 hover:text-[var(--color-gold-500)] transition-colors flex items-center gap-2">
          {typeof navigator !== 'undefined' && 'share' in navigator ? <Share2 className="w-5 h-5" /> : <LinkIcon className="w-5 h-5" />}
          {copied && <span className="text-xs text-[var(--color-gold-500)] absolute mt-8">Copied!</span>}
        </button>
      </div>
    </div>
  );
}
