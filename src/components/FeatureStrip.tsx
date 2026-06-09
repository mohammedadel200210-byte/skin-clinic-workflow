import { Shield, Award, Sparkles, Clock } from 'lucide-react';

const features = [
  { icon: Shield, label: 'Clinically Certified', desc: 'ISO-certified clinic with board-licensed practitioners' },
  { icon: Award, label: 'Award Winning', desc: 'Recognised leader in aesthetic medicine since 2012' },
  { icon: Sparkles, label: 'Personalised Care', desc: 'Every treatment protocol tailored to your unique skin' },
  { icon: Clock, label: 'Flexible Hours', desc: 'Extended hours Mon–Sat to fit your schedule' },
];

export default function FeatureStrip() {
  return (
    <div className="bg-[#1A0A05]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {features.map(({ icon: Icon, label, desc }, i) => (
            <div key={label} className={`flex items-start gap-4 px-6 ${i === 0 ? 'pl-0' : ''} ${i === features.length - 1 ? 'pr-0' : ''}`}>
              <div className="w-9 h-9 border border-[#C9956A]/40 flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={16} className="text-[#C9956A]" />
              </div>
              <div>
                <p className="text-white text-sm font-medium mb-1">{label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
