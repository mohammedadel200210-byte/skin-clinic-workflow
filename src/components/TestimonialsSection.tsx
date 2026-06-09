import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Kimani',
    title: 'Laser Treatment Client',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&facepad=2&faces=1',
    text: 'The laser treatment completely transformed my skin. After years of battling pigmentation, I finally have the even, glowing complexion I always dreamed of. The team at Sienna\'s are true professionals.',
    rating: 5,
  },
  {
    name: 'Amara Osei',
    title: 'Advanced Facial Client',
    avatar: 'https://images.pexels.com/photos/3762811/pexels-photo-3762811.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&facepad=2&faces=1',
    text: 'I\'ve been coming to Sienna\'s for six months and the difference in my skin is remarkable. My esthetician tailored a protocol specifically for my concerns and the results speak for themselves.',
    rating: 5,
  },
  {
    name: 'Zara Mwangi',
    title: 'Body Contouring Client',
    avatar: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&facepad=2&faces=1',
    text: 'The body contouring sessions exceeded every expectation. The clinic is immaculate, the staff are knowledgeable and warm, and the results are genuinely life-changing. Highly recommend to everyone.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-24 lg:py-32 bg-[#1A0A05] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#1A0A05]/90" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-[#C9956A] text-[10px] tracking-[0.35em] uppercase mb-3">Client Stories</p>
          <h2 className="text-white font-serif text-4xl lg:text-5xl font-light">
            Real Results, Real People
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Quote size={36} className="text-[#C9956A]/30 mx-auto mb-8" />

          <div className="min-h-[120px] flex items-center justify-center">
            <p className="text-white/80 text-lg lg:text-xl font-serif leading-relaxed italic">
              "{t.text}"
            </p>
          </div>

          <div className="flex justify-center gap-1 my-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} className="text-[#C9956A] fill-[#C9956A]" />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C9956A]/30"
            />
            <div className="text-left">
              <p className="text-white font-medium text-sm">{t.name}</p>
              <p className="text-white/50 text-[11px] tracking-[0.1em]">{t.title}</p>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-6 h-2 bg-[#C9956A]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
          {[
            { val: '12+', label: 'Years of Excellence' },
            { val: '8,000+', label: 'Satisfied Clients' },
            { val: '97%', label: 'Client Retention' },
            { val: '4.9★', label: 'Average Rating' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[#C9956A] font-serif text-4xl font-light mb-2">{s.val}</p>
              <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
