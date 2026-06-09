import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const WEBHOOK_URL = 'https://mohammedadel200210.app.n8n.cloud/webhook/skin-care-guide';

const SERVICES = [
  'Advanced Facial',
  'Laser Treatment',
  'Body Contouring',
  'Chemical Peel',
  'Injectables',
  'Skin Diagnostics',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function BookingSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          preferred_date: form.date,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="booking" className="py-24 lg:py-32 bg-[#FAF7F4]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[#C9956A] text-[10px] tracking-[0.35em] uppercase mb-4">Reserve Your Visit</p>
            <h2 className="text-[#1A0A05] font-serif text-4xl lg:text-5xl font-light leading-tight mb-6">
              Book a Consultation<br />
              <span className="italic">With Us</span>
            </h2>
            <p className="text-[#5C4033]/65 text-sm leading-relaxed mb-10 max-w-md">
              Take the first step towards radiant, healthy skin. Our expert team will assess your skin type and concerns to design a personalised treatment plan just for you.
            </p>

            <div className="space-y-6">
              {[
                { step: '01', title: 'Book Online', desc: 'Choose your service and preferred date.' },
                { step: '02', title: 'Skin Assessment', desc: 'Meet our specialists for a thorough skin analysis.' },
                { step: '03', title: 'Your Treatment', desc: 'Begin your personalised skincare journey.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-5">
                  <span className="text-[#C9956A]/50 font-serif text-sm shrink-0 mt-0.5">{item.step}</span>
                  <div>
                    <h4 className="text-[#1A0A05] font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-[#5C4033]/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <img
                src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                alt="Clinic interior"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white p-8 lg:p-10 shadow-sm">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-[#C9956A] mb-4" />
                <h3 className="text-[#1A0A05] font-serif text-2xl mb-2">Booking Received</h3>
                <p className="text-[#5C4033]/65 text-sm leading-relaxed max-w-xs">
                  Thank you! We've received your consultation request and will contact you within 24 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-[#C9956A] text-[11px] tracking-[0.2em] uppercase underline"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] placeholder-[#5C4033]/30 focus:outline-none focus:border-[#C9956A] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] placeholder-[#5C4033]/30 focus:outline-none focus:border-[#C9956A] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] placeholder-[#5C4033]/30 focus:outline-none focus:border-[#C9956A] transition-colors"
                      placeholder="+254 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] focus:outline-none focus:border-[#C9956A] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Service *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] focus:outline-none focus:border-[#C9956A] transition-colors bg-white appearance-none"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[#1A0A05] text-[10px] tracking-[0.2em] uppercase mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-[#E8DDD7] px-4 py-3 text-sm text-[#1A0A05] placeholder-[#5C4033]/30 focus:outline-none focus:border-[#C9956A] transition-colors resize-none"
                    placeholder="Tell us about your skin concerns..."
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-xs">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#1A0A05] text-white py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#C9956A] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' && <Loader2 size={14} className="animate-spin" />}
                  {status === 'loading' ? 'Sending...' : 'Request Consultation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
