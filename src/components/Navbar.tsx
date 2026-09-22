import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/85 backdrop-blur-xl border-b border-gold-400/10 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-px flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif text-ink-950 font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base lg:text-lg font-semibold text-cream-50 tracking-wide">
                AVOJ MINISTRIES
              </span>
              <span className="text-[10px] lg:text-xs text-gold-400/80 tracking-[0.15em] uppercase mt-0.5">
                Alarming Voice of Jesus
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3.5 py-2 text-sm font-medium text-cream-200/80 hover:text-gold-300 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-400 group-hover:w-2/3 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleNavClick('#prayer')}
            className="hidden lg:inline-flex btn-gold !py-2.5 !px-5"
          >
            <Heart className="w-4 h-4" />
            Prayer Request
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-cream-100 hover:text-gold-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-ink-900 border-l border-gold-400/10 pt-20 pb-8 px-6 overflow-y-auto transition-transform duration-500 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: mobileOpen ? 1 : 0,
                  transition: 'all 0.4s ease',
                }}
              >
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block py-3.5 px-4 rounded-xl text-cream-100 font-medium hover:bg-gold-400/10 hover:text-gold-300 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleNavClick('#prayer')}
            className="btn-gold w-full mt-6"
          >
            <Heart className="w-4 h-4" />
            Prayer Request
          </button>
        </div>
      </div>
    </>
  );
}
