import { Quote, Star } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const TESTIMONIALS = [
  {
    name: 'Anthonyraj',
    role: 'Founder, Kanchipuram, Uthiramerur',
    text: 'AVOJ Ministries began with a simple calling — to serve God and stand by our community. Watching this trust grow from a small gathering into a family that cares for hundreds is God\'s faithfulness at work.',
  },
  {
    name: 'Samundeeswari',
    role: 'Trustee/Treasurer, Kanchipuram, Uthiramerur',
    text: 'Every rupee given to this ministry is a trust from God and from our supporters. It is a privilege to steward these resources so they truly reach the families who need them.',
  },
  {
    name: 'Rishikumar',
    role: 'Trustee/Secretary, Chennai, Washermenpet',
    text: 'Serving as secretary of this trust has shown me how much can be done when a community comes together in faith. Every meeting, every outreach is a step closer to God\'s plan for us.',
  },
];

export function Testimonials() {
  return (
    <section className="relative section-py bg-ink-900">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Lives Transformed
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">What God Is Doing</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto">
            Real stories from real people whose lives have been touched by the
            love of Jesus Christ through AVOJ Ministries.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
          {TESTIMONIALS.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="glass-card p-7 h-full flex flex-col group hover:border-gold-400/25 hover:shadow-gold-glow transition-all duration-500 hover:-translate-y-1">
                <Quote className="w-8 h-8 text-gold-400/40 mb-4" />
                <p className="text-cream-200/70 text-sm leading-relaxed flex-1 mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gold-400/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shrink-0">
                    <span className="font-serif text-ink-950 font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-sm font-semibold text-cream-50">{testimonial.name}</p>
                    <p className="text-xs text-cream-300/50">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
