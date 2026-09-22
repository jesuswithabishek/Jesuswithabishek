import { Sun, Clock, Calendar, Users } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const SERVICES = [
  {
    day: 'Sunday',
    title: 'Morning Prayer / Service',
    time: '6:00 AM – 8:00 AM',
    icon: Sun,
    highlight: true,
  },
  {
    day: 'Monday – Friday',
    title: 'Fasting Prayer',
    time: '10:00 AM – 12:00 PM',
    icon: Clock,
    highlight: false,
  },
  {
    day: 'Tuesday',
    title: 'Gospel Prayer Meeting',
    time: '6:00 PM – 8:00 PM',
    icon: Calendar,
    highlight: false,
  },
  {
    day: 'Saturday',
    title: 'Open / Ministry Activities',
    time: 'Flexible Hours',
    icon: Users,
    highlight: false,
  },
];

export function ServiceTimes() {
  return (
    <section className="relative section-py bg-ink-900">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Join Us
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Service Times</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto">
            Come and worship with us. Everyone is welcome in the house of the Lord.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
          {SERVICES.map((service) => (
            <StaggerItem key={service.day}>
              <div
                className={`group p-7 rounded-2xl border h-full transition-all duration-500 hover:-translate-y-1 ${
                  service.highlight
                    ? 'bg-gradient-to-br from-gold-400/10 to-gold-600/5 border-gold-400/30 hover:shadow-gold-glow'
                    : 'bg-ink-850 border-gold-400/10 hover:border-gold-400/25'
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  {service.highlight && (
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-gold-400 bg-gold-400/10 px-2.5 py-1 rounded-full">
                      Main Service
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-gold-400/80 mb-2">
                  {service.day}
                </p>
                <h3 className="font-serif text-lg font-semibold text-cream-50 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-cream-200/60 text-sm font-medium">{service.time}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
