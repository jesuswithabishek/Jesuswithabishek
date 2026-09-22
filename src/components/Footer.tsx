import { Facebook, Youtube, Instagram, Heart, ArrowUp } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';

const QUICK_LINKS = NAV_LINKS.filter((l) => l.label !== 'Prayer');

const SOCIALS = [
  { icon: Facebook, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Youtube, url: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { icon: Instagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
];

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ink-950 border-t border-gold-400/10">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="container-px max-w-7xl mx-auto py-14 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shadow-gold-glow">
                <span className="font-serif text-ink-950 font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-cream-50 tracking-wide">
                  AVOJ MINISTRIES
                </h3>
                <p className="text-xs text-gold-400/80 tracking-[0.15em] uppercase mt-0.5">
                  Alarming Voice of Jesus
                </p>
              </div>
            </div>
            <p className="font-serif text-lg text-cream-100/80 italic mb-3">
              "Proclaiming Christ. Making Disciples. Serving People."
            </p>
            <p className="text-cream-200/50 text-sm leading-relaxed max-w-md">
              AVOJ Ministries is committed to taking the Gospel of Jesus Christ
              to every heart, making disciples, and transforming communities
              through the power of God's love.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-ink-800 border border-gold-400/10 flex items-center justify-center text-cream-200/70 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream-50 mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-cream-200/60 hover:text-gold-300 transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-gold-400 group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold text-cream-50 mb-5 tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-cream-200/60">
              <li>Chennai, Tamil Nadu, India</li>
              <li>info@avojministries.org</li>
              <li>+91 00000 00000</li>
            </ul>
            <button
              onClick={() => scrollTo('#prayer')}
              className="btn-outline-gold mt-6 !py-2.5 !px-5 !text-xs"
            >
              <Heart className="w-3.5 h-3.5" />
              Request Prayer
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-400/10">
        <div className="container-px max-w-7xl mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300/40 text-center sm:text-left">
            © 2026 AVOJ Ministries. All Rights Reserved.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="w-10 h-10 rounded-full bg-ink-800 border border-gold-400/10 flex items-center justify-center text-cream-200/60 hover:text-gold-400 hover:border-gold-400/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
