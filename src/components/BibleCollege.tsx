import { ArrowRight, BookOpen, Sprout, Crown, Users, Heart } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { BIBLE_COLLEGE_IMAGE } from '@/lib/data';

const FEATURES = [
  { icon: BookOpen, title: 'Bible Education', desc: 'Comprehensive teaching of Scripture from Genesis to Revelation.' },
  { icon: Sprout, title: 'Spiritual Growth', desc: 'Deepening your walk with God through prayer and study.' },
  { icon: Crown, title: 'Leadership Development', desc: 'Equipping future leaders with biblical wisdom and practical skills.' },
  { icon: Users, title: 'Ministry Preparation', desc: 'Hands-on training for effective and faithful ministry service.' },
  { icon: Heart, title: 'Discipleship', desc: 'One-on-one mentoring to shape character and calling.' },
];

export function BibleCollege() {
  return (
    <section id="bible-college" className="relative section-py bg-ink-950 overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={BIBLE_COLLEGE_IMAGE}
                  alt="Open Bible on a podium in a church"
                  loading="lazy"
                  className="w-full h-[420px] lg:h-[500px] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-6 glass-card px-6 py-4 shadow-gold-glow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-semibold text-cream-50 leading-none">Equipped</p>
                    <p className="text-xs text-cream-300/60 mt-1">For Every Good Work</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <span className="section-label">
                <span className="w-8 h-px bg-gold-400/50" />
                Equipping Saints
              </span>
              <h2 className="section-title mt-4">AVOJ Bible College</h2>
              <p className="mt-3 text-lg text-gold-300/80 font-serif italic">
                Equipping believers with the Word of God
              </p>
              <p className="mt-5 text-cream-200/70 leading-relaxed">
                Our Bible College is dedicated to grounding believers in the
                truth of Scripture, nurturing spiritual maturity, and
                preparing men and women for effective ministry. Whether you
                are called to preach, teach, or serve, AVOJ Bible College
                provides the foundation you need.
              </p>
            </Reveal>

            <Stagger className="mt-8 space-y-4" staggerChildren={0.08}>
              {FEATURES.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gold-400/5 transition-colors duration-300">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-cream-50 mb-1">{feature.title}</h4>
                      <p className="text-cream-200/60 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.3}>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold mt-8"
              >
                Learn More About Bible College
                <ArrowRight className="w-4 h-4" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
