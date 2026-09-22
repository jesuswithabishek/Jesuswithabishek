import { MapPin, ArrowRight } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { OUTREACH_BG_IMAGE } from '@/lib/data';

const LOCATIONS = [
  { name: 'Andhra Pradesh', desc: 'Gospel meetings and prayer gatherings across the state.' },
  { name: 'Thiruvallur', desc: 'Reaching villages and towns with the message of Christ.' },
  { name: 'Chennai', desc: 'Urban outreach, church planting, and community service.' },
  { name: 'Kanchipuram', desc: 'Sharing the Gospel in the city of a thousand temples.' },
];

export function Outreach() {
  return (
    <section id="outreach" className="relative section-py overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={OUTREACH_BG_IMAGE}
          alt="Cross at sunrise over mountains"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
      </div>

      <div className="relative container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Beyond the Walls
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Taking the Gospel Beyond the Walls</h2>
          <p className="mt-5 text-cream-200/70 max-w-3xl mx-auto leading-relaxed text-balance">
            AVOJ Ministries conducts Gospel meetings, prayer gatherings, and
            outreach programs to reach people with the message of Jesus Christ.
            We go where the need is greatest, carrying the hope of the Gospel
            to every city and village.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
          {LOCATIONS.map((location) => (
            <StaggerItem key={location.name}>
              <div className="group glass-card p-7 h-full hover:border-gold-400/30 hover:shadow-gold-glow transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream-50 mb-2">{location.name}</h3>
                <p className="text-cream-200/60 text-sm leading-relaxed">{location.desc}</p>
                <div className="mt-4 pt-4 border-t border-gold-400/10 flex items-center gap-1.5 text-sm text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-medium">Active Outreach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
