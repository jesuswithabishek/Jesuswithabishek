import { Facebook, Youtube, Instagram, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SOCIAL_LINKS } from '@/lib/data';

const SOCIALS = [
  {
    name: 'Facebook',
    icon: Facebook,
    handle: '@alarming_voice_of_jesus',
    url: SOCIAL_LINKS.facebook,
    color: 'hover:bg-blue-600',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    handle: 'AVOJ Ministries',
    url: SOCIAL_LINKS.youtube,
    color: 'hover:bg-red-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    handle: '@alarming_voice_of_jesus',
    url: SOCIAL_LINKS.instagram,
    color: 'hover:bg-pink-600',
  },
];

export function SocialMedia() {
  return (
    <section className="relative section-py bg-ink-950">
      <div className="container-px max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Stay Connected
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Follow Our Ministry</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto">
            Join us on social media for daily encouragement, live streams,
            and updates on what God is doing through AVOJ Ministries.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-3 gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-7 flex flex-col items-center text-center hover:border-gold-400/30 hover:shadow-gold-glow transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl bg-ink-800 flex items-center justify-center mb-5 ${social.color} transition-colors duration-300 group-hover:scale-110`}>
                  <social.icon className="w-7 h-7 text-cream-100 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream-50 mb-1">{social.name}</h3>
                <p className="text-cream-300/50 text-xs mb-3">{social.handle}</p>
                <span className="inline-flex items-center gap-1 text-sm text-gold-400 group-hover:text-gold-300 transition-colors">
                  Follow Us
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
