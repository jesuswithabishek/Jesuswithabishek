import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { PRAYER_BG_IMAGE } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Prayer() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', request: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.request) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('prayer_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        request: form.request,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', request: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="prayer" className="relative section-py overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={PRAYER_BG_IMAGE}
          alt="Hands holding a rosary against a dramatic sky"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/88" />
      </div>

      <div className="relative container-px max-w-5xl mx-auto">
        <Reveal className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <Heart className="w-8 h-8 text-gold-400" />
          </div>
          <h2 className="section-title">Prayer Changes Everything</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto leading-relaxed text-balance">
            Whatever you are facing, you do not have to carry it alone. Let us
            stand with you in prayer. Share your request below and our prayer
            team will faithfully lift you up before the throne of grace.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-card p-7 sm:p-10 max-w-2xl mx-auto shadow-gold-glow">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="prayer-name" className="block text-sm font-medium text-cream-200/80 mb-2">
                    Name <span className="text-gold-400">*</span>
                  </label>
                  <input
                    id="prayer-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="prayer-email" className="block text-sm font-medium text-cream-200/80 mb-2">
                    Email <span className="text-gold-400">*</span>
                  </label>
                  <input
                    id="prayer-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="prayer-phone" className="block text-sm font-medium text-cream-200/80 mb-2">
                  Phone
                </label>
                <input
                  id="prayer-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-field"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="prayer-request" className="block text-sm font-medium text-cream-200/80 mb-2">
                  Prayer Request <span className="text-gold-400">*</span>
                </label>
                <textarea
                  id="prayer-request"
                  required
                  rows={4}
                  value={form.request}
                  onChange={(e) => setForm({ ...form, request: e.target.value })}
                  className="input-field resize-none"
                  placeholder="Share your prayer request with us..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Prayer Request
                  </>
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <p className="text-sm text-green-200">
                    Your prayer request has been received. Our team is praying for you.
                  </p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
                >
                  <p className="text-sm text-red-200">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
