import { Target, Eye, Heart, BookOpen, HandHeart, Users, Sparkles, Compass } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';

const VALUES = [
  { icon: Heart, title: 'Faith', desc: 'Trusting God fully, walking in His promises, and living by His Word every day.' },
  { icon: HandHeart, title: 'Prayer', desc: 'Seeking God\'s presence fervently, knowing prayer moves the heart of God.' },
  { icon: Sparkles, title: 'Evangelism', desc: 'Boldly sharing the Gospel with every person, everywhere we go.' },
  { icon: BookOpen, title: 'Discipleship', desc: 'Nurturing believers to grow in Christ and become fully devoted followers.' },
  { icon: Compass, title: 'Compassion', desc: 'Showing Christ\'s love through kindness, care, and concern for all people.' },
  { icon: Users, title: 'Service', desc: 'Serving communities selflessly, meeting needs in the name of Jesus.' },
];

export function About() {
  return (
    <section id="about" className="relative section-py bg-ink-950">
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-radial-gold opacity-30 pointer-events-none" />

      <div className="relative container-px max-w-7xl mx-auto">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Who We Are
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">About AVOJ Ministries</h2>
          <p className="mt-5 text-cream-200/70 max-w-3xl mx-auto leading-relaxed text-balance">
            AVOJ Ministries is committed to proclaiming the Gospel of Jesus Christ
            through prayer, discipleship, evangelism, and serving communities.
            We exist to be a voice that calls people to the saving knowledge of
            Christ and to walk alongside them in their spiritual journey.
          </p>
        </Reveal>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <Reveal>
            <div className="glass-card p-8 lg:p-10 h-full group hover:border-gold-400/25 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                <Target className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-3">Our Mission</h3>
              <p className="text-cream-200/70 leading-relaxed">
                To proclaim the Gospel of Jesus Christ to every heart, make
                disciples of all nations, and demonstrate God's love through
                prayer, teaching, and compassionate service to communities.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card p-8 lg:p-10 h-full group hover:border-gold-400/25 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-colors duration-300">
                <Eye className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-3">Our Vision</h3>
              <p className="text-cream-200/70 leading-relaxed">
                To see communities and nations transformed by the power of the
                Gospel — where every believer is equipped, every soul is reached,
                and every life reflects the glory of Jesus Christ.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core Values */}
        <Reveal className="text-center mb-12">
          <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-cream-50">
            Our Core <span className="gold-text">Values</span>
          </h3>
          <p className="mt-3 text-cream-200/60 text-sm">The principles that guide everything we do</p>
        </Reveal>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerChildren={0.08}>
          {VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <div className="glass-card p-7 h-full group hover:border-gold-400/25 hover:shadow-gold-glow transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-semibold text-cream-50 mb-1.5">{value.title}</h4>
                    <p className="text-cream-200/60 text-sm leading-relaxed">{value.desc}</p>
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
