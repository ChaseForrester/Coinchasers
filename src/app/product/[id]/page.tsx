import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-gray-400 font-medium uppercase tracking-wider mb-12">
        <Link href="/" className="hover:text-[var(--color-gold-500)] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-[var(--color-gold-500)] transition-colors">Shop</Link>
        <span>/</span>
        <Link href={`/category/${product.category}`} className="hover:text-[var(--color-gold-500)] transition-colors">{product.category}</Link>
        <span>/</span>
        <span className="text-[var(--color-gold-500)] truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {/* Product Image */}
        <div className="relative aspect-[4/5] bg-[var(--color-card)] border border-border">
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-[var(--color-gold-500)] text-black text-xs font-bold uppercase tracking-wider px-3 py-1 z-10">
              New Arrival
            </div>
          )}
          <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
            <span className="text-neutral-700 font-bold uppercase tracking-widest text-lg">Image Coming Soon</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
            {product.name}
          </h1>
          <p className="text-2xl font-medium text-[var(--color-gold-500)] mb-8">${product.price}</p>
          
          <div className="bg-[var(--color-card)] border border-border p-6 mb-8">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-3">Description</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              {product.description}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">Size</h3>
            <div className="grid grid-cols-4 gap-3">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button 
                  key={size}
                  className="border border-border text-white py-3 hover:border-[var(--color-gold-500)] hover:text-[var(--color-gold-500)] transition-colors font-medium text-sm"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-black py-4 font-bold uppercase tracking-widest text-sm transition-all hover-lift w-full mb-4">
            Add to Bag
          </button>
          
          <div className="mt-8 pt-8 border-t border-border space-y-4 text-sm text-gray-500">
            <p className="flex justify-between">
              <span className="uppercase tracking-wider font-medium text-gray-400">Shipping</span>
              <span>Free on orders over $200</span>
            </p>
            <p className="flex justify-between">
              <span className="uppercase tracking-wider font-medium text-gray-400">Returns</span>
              <span>14 days return policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
