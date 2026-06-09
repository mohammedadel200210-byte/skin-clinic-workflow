export default function AboutSection() {
  return (
    <section id="about-us" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col items-start lg:items-center lg:text-center">
            {/* Logo mark */}
            <div className="mb-6">
              <div className="flex items-center gap-1 justify-center">
                <span className="text-[#C9956A] font-serif text-5xl leading-none">S</span>
                <span className="text-[#3D1A0E] font-serif text-5xl leading-none italic">S</span>
              </div>
              <p className="text-[#3D1A0E] text-sm tracking-[0.35em] uppercase font-light mt-1">Sienna's</p>
              <p className="text-[#3D1A0E]/50 text-[9px] tracking-[0.3em] uppercase">Skin &amp; Sculpt</p>
              <div className="flex items-center gap-2 mt-1 justify-center">
                <span className="h-px w-8 bg-[#C9956A]/40" />
                <span className="text-[#C9956A]/70 text-[8px] tracking-[0.15em]">Renew · Transform · Radiate</span>
                <span className="h-px w-8 bg-[#C9956A]/40" />
              </div>
            </div>

            <p className="text-[#C9956A] text-[10px] tracking-[0.3em] uppercase mb-4">
              Sienna's Skin &amp; Sculpt
            </p>

            <h2 className="text-[#1A0A05] font-serif text-3xl lg:text-4xl uppercase leading-tight font-bold mb-6 max-w-sm">
              We Prepare Every Collection With the Utmost Care
            </h2>

            <p className="text-[#5C4033]/70 text-sm leading-relaxed mb-8 max-w-md">
              Dui cursus mauris aliquet sit sit nulla sed. Cursus mi in etiam sit est. At dignissim purus vitae imperdiet
              amet netus pulvinar adipiscing blandit. Nunc commodo pellentesque commodo in. Lacus eleifend proin orci
              nunc adipiscing bibendum nisl pellentesque.
            </p>

            <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
              {[
                { value: '12+', label: 'Years Experience' },
                { value: '4.9', label: 'Client Rating' },
                { value: '8K+', label: 'Happy Clients' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[#C9956A] font-serif text-3xl font-light">{stat.value}</p>
                  <p className="text-[#5C4033]/60 text-[10px] tracking-[0.15em] uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-5 gap-3 h-[520px]">
              <div className="col-span-3 row-span-3 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Skin treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-2 row-span-2 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Facial treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-2 row-span-3 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3738357/pexels-photo-3738357.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Beauty treatment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-3 row-span-2 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Skincare products"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-5 -left-5 bg-[#1A0A05] text-white px-6 py-4 text-center">
              <p className="font-serif text-2xl text-[#C9956A]">ISO</p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/70">Certified</p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-white/70">Clinic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
