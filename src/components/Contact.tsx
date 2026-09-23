import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Loader2, Facebook, Youtube, Instagram } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase } from '@/lib/supabase';
import { SOCIAL_LINKS } from '@/lib/data';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Location', value: 'Uthiramerur, kanchipuram,Tamilnadu, india'},
  { icon: Mail, label: 'Email', value: 'jyesm126@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7299906126' },
  { icon: Clock, label: 'Church Hours', value: 'Mon – Sun, 9:00 AM – 6:00 PM' },
];

const SOCIALS = [
  { icon: Facebook, url: SOCIAL_LINKS.facebook, label: 'Facebook' },
  { icon: Youtube, url: SOCIAL_LINKS.youtube, label: 'YouTube' },
  { icon: Instagram, url: SOCIAL_LINKS.instagram, label: 'Instagram' },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject,
        message: form.message,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative section-py bg-ink-900">
      <div className="container-px max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="section-label">
            <span className="w-8 h-px bg-gold-400/50" />
            Get in Touch
            <span className="w-8 h-px bg-gold-400/50" />
          </span>
          <h2 className="section-title mt-4">Contact Us</h2>
          <p className="mt-5 text-cream-200/70 max-w-2xl mx-auto">
            We would love to hear from you. Whether you have a question, a
            prayer need, or want to partner with us, reach out anytime.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info + map */}
          <Reveal>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map((info) => (
                  <div key={info.label} className="glass-card p-5 flex items-start gap-4 hover:border-gold-400/25 transition-colors duration-300">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-gold-400/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-gold-400/70 mb-1">{info.label}</p>
                      <p className="text-sm text-cream-100">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gold-400/10 h-64">
                <iframe
                  title="AVOJ Ministries Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8491708273!2d79.95!3d13.0478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265b4c4b0c7b3%3A0x4e4b1c4b4c4b4c4b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-cream-200/60">Follow us:</span>
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
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <div className="glass-card p-7 sm:p-8 shadow-gold-glow">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-cream-200/80 mb-2">
                      Name <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-cream-200/80 mb-2">
                      Email <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-cream-200/80 mb-2">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-cream-200/80 mb-2">
                      Subject <span className="text-gold-400">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="input-field"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-cream-200/80 mb-2">
                    Message <span className="text-gold-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Your message..."
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
                      Send Message
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
                      Your message has been sent. We will get back to you soon.
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
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
