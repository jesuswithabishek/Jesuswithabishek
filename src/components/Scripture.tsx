import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SCRIPTURE_IMAGE } from '@/lib/data';

export function Scripture() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={SCRIPTURE_IMAGE}
          alt="Open Bible on an altar"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-transparent to-ink-950" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-gold opacity-50 pointer-events-none" />

      <div className="relative container-px max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/20 mb-8"
        >
          <Quote className="w-8 h-8 text-gold-400" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-cream-50 leading-[1.4] italic text-balance"
        >
          "For I am not ashamed of the gospel of Christ: for it is the power of
          God unto salvation to every one that believeth."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg text-gold-300 font-serif tracking-wide"
        >
          — Romans 1:16
        </motion.p>
      </div>
    </section>
  );
}
