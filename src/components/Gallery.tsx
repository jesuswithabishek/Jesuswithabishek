import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { GALLERY_IMAGES } from '@/lib/data';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % GALLERY_IMAGES.length));
  }, []);
  const prev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  return (
    <section id="gallery" className="relative section-py bg-ink-950">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Moments of Faith
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Gallery</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto">
            A glimpse of what God is doing through AVOJ Ministries.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" staggerChildren={0.06}>
          {GALLERY_IMAGES.map((image, i) => (
            <StaggerItem key={i}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-ink-850 border border-gold-400/10 hover:border-gold-400/30 transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left">
                  <p className="text-xs sm:text-sm font-medium text-cream-100 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    {image.label}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ink-950/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-gold-400" />
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-cream-100 hover:bg-gold-400/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-5 w-11 h-11 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-cream-100 hover:bg-gold-400/20 transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_IMAGES[lightboxIndex].src.replace('w=800&h=600', 'w=1600&h=1200')}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center mt-4 text-cream-200/80 font-serif text-lg">
                {GALLERY_IMAGES[lightboxIndex].label}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-5 w-11 h-11 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-cream-100 hover:bg-gold-400/20 transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
