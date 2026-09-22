import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { HERO_IMAGE } from '@/lib/data';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Worship gathering with hands raised"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-ink-950/40" />
      </div>

      {/* Decorative radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-radial-gold opacity-60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-px text-center max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/25 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold-200">
            Serving Christ • Reaching People • Transforming Lives
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold text-cream-50 leading-[1.05] text-balance"
        >
          AVOJ <span className="gold-gradient-text">MINISTRIES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 text-lg sm:text-xl text-gold-300/90 font-serif italic tracking-wide"
        >
          Alarming Voice of Jesus
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 mb-8 w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-cream-100 leading-snug text-balance"
        >
          Taking the Gospel to Every Heart
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-base sm:text-lg text-cream-200/70 max-w-2xl mx-auto leading-relaxed"
        >
          Called to proclaim the Gospel, disciple believers, and bring the
          transforming love of Jesus Christ to communities and nations.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo('#ministries')} className="btn-gold w-full sm:w-auto">
            Explore Our Ministry
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => scrollTo('#contact')} className="btn-outline-gold w-full sm:w-auto">
            <Mail className="w-4 h-4" />
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream-300/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-400/60 to-transparent" />
      </motion.div>
    </section>
  );
}
