import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    label: "Sienna's Skin & Sculpt",
    title: 'Precision.\nCare.\nConfidence.',
    sub: 'Experience advanced clinical procedures designed to rejuvenate your skin and sculpt your natural beauty. Our expert team combines modern aesthetics with a high-end experience for your ultimate transformation.',
  },
  {
    image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    label: "Advanced Skin Therapies",
    title: 'Restore.\nRevive.\nRenew.',
    sub: 'From chemical peels to laser treatments, our certified dermatologists craft personalised protocols to restore your skin\'s youthful glow and vitality.',
  },
  {
    image: 'https://images.pexels.com/photos/3738357/pexels-photo-3738357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    label: "Body Contouring",
    title: 'Sculpt.\nDefine.\nTransform.',
    sub: 'Cutting-edge body contouring and sculpting treatments tailored to your unique goals. Redefine your silhouette with clinically proven technology.',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const goTo = (idx: number) => {
    if (idx === active || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setActive(idx);
      setTransitioning(false);
    }, 400);
  };

  const slide = slides[active];

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0503]/75 via-[#0D0503]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0503]/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl ml-auto mr-0 lg:mr-24">
            <p
              className={`text-[#F2BEB5] text-[10px] tracking-[0.35em] uppercase mb-4 transition-all duration-500 ${
                transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.label}
            </p>
            <h1
              className={`text-white font-serif text-5xl lg:text-7xl leading-tight mb-6 whitespace-pre-line transition-all duration-500 delay-100 ${
                transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.title}
            </h1>
            <p
              className={`text-white/75 text-sm leading-relaxed mb-10 max-w-md transition-all duration-500 delay-150 ${
                transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              {slide.sub}
            </p>
            <div
              className={`flex items-center gap-4 transition-all duration-500 delay-200 ${
                transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#F2BEB5] text-[#3D1A0E] px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors duration-200"
              >
                All Products
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/80 hover:text-[#F2BEB5] text-[11px] tracking-[0.2em] uppercase transition-colors duration-200"
              >
                Our Services <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 lg:left-12 z-10 flex items-center gap-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="flex items-center gap-3 group"
          >
            <span
              className={`text-xs font-light transition-colors duration-200 ${
                i === active ? 'text-white' : 'text-white/40'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                i === active ? 'w-8 bg-[#F2BEB5]' : 'w-4 bg-white/30 group-hover:bg-white/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 right-6 lg:right-12 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[9px] tracking-[0.25em] uppercase rotate-90 origin-center translate-y-4">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
      </div>
    </section>
  );
}
