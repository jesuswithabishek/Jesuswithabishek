import { ArrowRight, BookOpen, HandHeart, Users, GraduationCap, Heart, Music, Globe } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { MINISTRY_IMAGES } from '@/lib/data';

const MINISTRIES = [
  { icon: BookOpen, title: 'Gospel Ministry', desc: 'Proclaiming the Good News of Jesus Christ with power and clarity to every soul.', img: MINISTRY_IMAGES.gospel },
  { icon: HandHeart, title: 'Prayer Ministry', desc: 'Fervent, believing prayer that moves mountains and brings breakthroughs.', img: MINISTRY_IMAGES.prayer },
  { icon: BookOpen, title: 'Bible Teaching', desc: 'Sound, verse-by-verse teaching that grounds believers in the Word of God.', img: MINISTRY_IMAGES.bible },
  { icon: Users, title: 'Discipleship', desc: 'Walking with new believers toward maturity and Christ-like character.', img: MINISTRY_IMAGES.discipleship },
  { icon: Heart, title: 'Youth Ministry', desc: 'Raising a generation of young people passionate about Jesus and His Kingdom.', img: MINISTRY_IMAGES.youth },
  { icon: GraduationCap, title: 'Children\'s Ministry', desc: 'Nurturing children in God\'s love through fun, faith, and foundational truth.', img: MINISTRY_IMAGES.children },
  { icon: Music, title: 'Worship & Music', desc: 'Spirit-filled worship that exalts God and transforms the atmosphere.', img: MINISTRY_IMAGES.worship },
  { icon: Globe, title: 'Community Outreach', desc: 'Serving our neighbors with the love of Christ through practical action.', img: MINISTRY_IMAGES.outreach },
];

export function Ministries() {
  return (
    <section id="ministries" className="relative section-py bg-ink-900">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            What We Do
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Our Ministries</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto leading-relaxed">
            Every ministry at AVOJ is designed to bring you closer to Christ
            and equip you to serve Him with purpose and passion.
          </p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.07}>
          {MINISTRIES.map((ministry) => (
            <StaggerItem key={ministry.title}>
              <div className="group relative overflow-hidden rounded-2xl bg-ink-850 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500 hover:-translate-y-1.5 h-full">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={ministry.img}
                    alt={ministry.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/40 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-ink-950/80 backdrop-blur-md border border-gold-400/20 flex items-center justify-center">
                    <ministry.icon className="w-5 h-5 text-gold-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-cream-50 mb-2">{ministry.title}</h3>
                  <p className="text-cream-200/60 text-sm leading-relaxed mb-4">{ministry.desc}</p>
                  <button className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors group/btn">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
