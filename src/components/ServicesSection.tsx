import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Advanced Facials',
    desc: 'Medical-grade facials tailored to your skin type — from brightening and hydrating to anti-aging protocols.',
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
  {
    id: '02',
    title: 'Laser Treatments',
    desc: 'State-of-the-art laser technology for skin resurfacing, pigmentation correction, and hair removal.',
    image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
  {
    id: '03',
    title: 'Body Contouring',
    desc: 'Non-invasive body sculpting treatments to define your silhouette and boost skin firmness.',
    image: 'https://images.pexels.com/photos/3738357/pexels-photo-3738357.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
  {
    id: '04',
    title: 'Chemical Peels',
    desc: 'Professional-grade chemical exfoliation treatments that reveal smoother, more radiant skin.',
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
  {
    id: '05',
    title: 'Injectables',
    desc: 'Expert administration of dermal fillers and neuromodulators for subtle, natural-looking results.',
    image: 'https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
  {
    id: '06',
    title: 'Skin Diagnostics',
    desc: 'Comprehensive skin analysis with advanced imaging technology and personalised treatment planning.',
    image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF7F4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-[#C9956A] text-[10px] tracking-[0.35em] uppercase mb-3">What We Offer</p>
            <h2 className="text-[#1A0A05] font-serif text-4xl lg:text-5xl font-light leading-tight max-w-md">
              Treatments Crafted<br />for Your Skin
            </h2>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 border border-[#1A0A05]/20 text-[#1A0A05] px-7 py-3.5 text-[10px] tracking-[0.2em] uppercase hover:bg-[#1A0A05] hover:text-white transition-all duration-200 self-start lg:self-auto"
          >
            Book a Consultation <ArrowRight size={13} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-5 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#1A0A05]/0 group-hover:bg-[#1A0A05]/20 transition-colors duration-300" />
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#C9956A]/50 font-serif text-sm mt-0.5 shrink-0">{service.id}</span>
                <div>
                  <h3 className="text-[#1A0A05] font-serif text-xl mb-2 group-hover:text-[#C9956A] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#5C4033]/65 text-sm leading-relaxed">{service.desc}</p>
                  <button className="mt-3 flex items-center gap-2 text-[#C9956A] text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Learn More <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
