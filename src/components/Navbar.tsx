import { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#1A0A05]/95 backdrop-blur-sm shadow-xl top-0' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'About Us', 'Booking', 'Services'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/80 hover:text-[#F2BEB5] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#C9956A] font-serif text-3xl leading-none">S</span>
              <span className="text-white font-serif text-3xl leading-none italic">S</span>
            </div>
            <div className="text-center mt-0.5">
              <p className="text-white text-[13px] tracking-[0.3em] uppercase font-light">Sienna's</p>
              <p className="text-white/60 text-[8px] tracking-[0.25em] uppercase">Skin &amp; Sculpt</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="h-px w-6 bg-white/30" />
                <span className="text-white/40 text-[7px] tracking-[0.15em]">Renew · Transform · Radiate</span>
                <span className="h-px w-6 bg-white/30" />
              </div>
            </div>
          </div>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Services', 'Products'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-[#F2BEB5] text-[11px] tracking-[0.18em] uppercase font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+25420328002"
              className="flex items-center gap-2 text-white/80 hover:text-[#F2BEB5] transition-colors duration-200"
            >
              <Phone size={13} />
              <span className="text-[11px] tracking-wider">+254 2032 8002</span>
            </a>
            <button className="text-white/80 hover:text-[#F2BEB5] transition-colors duration-200">
              <ShoppingBag size={16} />
            </button>
            <button className="text-white/80 hover:text-[#F2BEB5] transition-colors duration-200">
              <Search size={16} />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1A0A05]/98 border-t border-white/10 py-6 space-y-4">
            {['Home', 'About Us', 'Booking', 'Services', 'Products'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-white/80 hover:text-[#F2BEB5] text-[11px] tracking-[0.2em] uppercase py-2 px-4 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="tel:+25420328002" className="flex items-center gap-2 text-white/70 px-4 py-2 text-sm">
              <Phone size={14} /> +254 2032 8002
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
