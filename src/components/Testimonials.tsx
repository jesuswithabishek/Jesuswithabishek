import { Quote, Star } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const TESTIMONIALS = [
  {
    name: 'Ravi Kumar',
    role: 'Member, Chennai',
    text: 'AVOJ Ministries changed my life. Through their Gospel meetings, I found Christ and a community that truly loves and supports me. I am forever grateful.',
  },
  {
    name: 'Lakshmi Devi',
    role: 'Prayer Partner, Thiruvallur',
    text: 'The prayer ministry has been a lifeline for my family. When we faced our darkest hour, the AVOJ team stood with us in prayer and God answered.',
  },
  {
    name: 'Samuel Raj',
    role: 'Bible College Student',
    text: 'The Bible College gave me a solid foundation in God\'s Word. I came as a seeker and I am leaving equipped to serve His Kingdom with confidence.',
  },
  {
    name: 'Grace Thomas',
    role: 'Youth Member, Kanchipuram',
    text: 'The youth ministry helped me discover my purpose in Christ. I now know that God has a plan for my life, and I am excited to walk in it.',
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
