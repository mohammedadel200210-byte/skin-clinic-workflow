import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0503] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#C9956A] text-[10px] tracking-[0.3em] uppercase mb-2">Start Your Journey</p>
            <h3 className="text-white font-serif text-3xl lg:text-4xl font-light">
              Your Skin Transformation<br />Awaits
            </h3>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center gap-3 border border-[#C9956A] text-[#C9956A] px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[#C9956A] hover:text-white transition-all duration-300 shrink-0"
          >
            Book Now <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#C9956A] font-serif text-3xl leading-none">S</span>
              <span className="text-white font-serif text-3xl leading-none italic">S</span>
            </div>
            <p className="text-white/80 text-xs tracking-[0.3em] uppercase">Sienna's Skin & Sculpt</p>
            <p className="text-white/30 text-[8px] tracking-[0.2em] uppercase mt-0.5">Renew · Transform · Radiate</p>
            <p className="text-white/50 text-sm leading-relaxed mt-5">
              Advanced clinical aesthetics bringing precision, care, and confidence to every treatment.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#C9956A] hover:text-[#C9956A] transition-all duration-200"
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Products', 'Booking', 'Blog'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/50 text-sm hover:text-[#C9956A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-[#C9956A] group-hover:w-4 transition-all duration-200" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Our Services</h4>
            <ul className="space-y-3">
              {['Advanced Facials', 'Laser Treatments', 'Body Contouring', 'Chemical Peels', 'Injectables', 'Skin Diagnostics'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 text-sm hover:text-[#C9956A] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-[#C9956A] group-hover:w-4 transition-all duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[10px] tracking-[0.3em] uppercase mb-6 font-medium">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9956A] shrink-0 mt-0.5" />
                <span className="text-white/50 text-sm leading-relaxed">
                  14 Radiance Blvd, Westlands<br />Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9956A] shrink-0" />
                <a href="tel:+25420328002" className="text-white/50 text-sm hover:text-[#C9956A] transition-colors">
                  +254 2032 8002
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#C9956A] shrink-0" />
                <a href="mailto:hello@siennas.com" className="text-white/50 text-sm hover:text-[#C9956A] transition-colors">
                  hello@siennas.com
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h5 className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-3">Clinic Hours</h5>
              <div className="space-y-1.5">
                {[
                  ['Mon – Fri', '8:00 AM – 7:00 PM'],
                  ['Saturday', '9:00 AM – 5:00 PM'],
                  ['Sunday', 'Closed'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between text-xs">
                    <span className="text-white/40">{day}</span>
                    <span className="text-white/60">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-[11px]">
            &copy; {new Date().getFullYear()} Sienna's Skin &amp; Sculpt. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-white/30 text-[11px] hover:text-white/60 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
