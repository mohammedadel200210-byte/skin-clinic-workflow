import { ShoppingBag, Star } from 'lucide-react';

const products = [
  {
    name: 'Radiance Serum C+',
    category: 'Brightening',
    price: '$89',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    badge: 'Best Seller',
  },
  {
    name: 'Hydra-Glow Moisturiser',
    category: 'Hydration',
    price: '$65',
    rating: 4.8,
    reviews: 94,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    badge: 'New',
  },
  {
    name: 'Retinol Night Repair',
    category: 'Anti-Aging',
    price: '$110',
    rating: 4.9,
    reviews: 212,
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    badge: 'Award Winner',
  },
  {
    name: 'SPF 50+ Daily Shield',
    category: 'Sun Protection',
    price: '$48',
    rating: 4.7,
    reviews: 176,
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop',
    badge: null,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9956A] text-[10px] tracking-[0.35em] uppercase mb-3">Curated for You</p>
          <h2 className="text-[#1A0A05] font-serif text-4xl lg:text-5xl font-light leading-tight">
            Professional Skincare Range
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-[#C9956A]/30" />
            <span className="text-[#C9956A]/60 text-[9px] tracking-[0.3em] uppercase">Clinically Formulated</span>
            <span className="h-px w-16 bg-[#C9956A]/30" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#1A0A05] text-white text-[9px] tracking-[0.15em] uppercase px-3 py-1">
                    {product.badge}
                  </span>
                )}
                <button className="absolute bottom-0 left-0 right-0 bg-[#C9956A] text-white py-3 text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <ShoppingBag size={13} /> Add to Cart
                </button>
              </div>
              <p className="text-[#C9956A]/70 text-[9px] tracking-[0.2em] uppercase mb-1">{product.category}</p>
              <h3 className="text-[#1A0A05] font-serif text-lg mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-[#1A0A05] font-medium text-base">{product.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={11} className="text-[#C9956A] fill-[#C9956A]" />
                  <span className="text-[#5C4033]/60 text-xs">{product.rating} ({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-[#1A0A05] text-white px-10 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9956A] transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
