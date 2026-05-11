
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Sparkles, Heart } from 'lucide-react';
import Section from './Section';
import Card from './Card';
import Button from './Button';
import { personalInfo } from '../data/personalInfo';

const InfoCard = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl border border-pink-100 dark:border-rose-900/30 bg-[#FFF5F8] dark:bg-rose-900/10 hover:border-pink-200 dark:hover:border-rose-700/50 transition-all group">
    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform"
      style={{ background: 'linear-gradient(135deg, #FEE0EE, #fecdd3)' }}>
      <Icon size={20} className="text-rose-500" />
    </div>
    <div>
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      {href ? (
        <a href={href} className="text-sm font-semibold text-gray-800 dark:text-white hover:text-rose-500 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-sm font-semibold text-gray-800 dark:text-white">{value}</p>
      )}
    </div>
  </div>
);

const inputClass = "w-full px-4 py-3 rounded-xl border border-pink-100 dark:border-rose-900/40 bg-[#FFF5F8] dark:bg-rose-900/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-300 dark:focus:ring-rose-600 focus:border-transparent transition-all text-sm";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      const response = await fetch(`${supabaseUrl}/functions/v1/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${supabaseAnonKey}` },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: result.message || "Thank you! I'll get back to you soon 🌸" });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to send. Please email me directly 💌' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something beautiful together">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* Left col */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Heart size={18} className="text-rose-400" fill="currentColor" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's Connect
              </h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Reach me through the form or directly — I love meeting new people! ✨
            </p>
          </div>

          <div className="space-y-3">
            <InfoCard icon={Mail} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
            <InfoCard icon={Phone} label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
            <InfoCard icon={MapPin} label="Location" value={personalInfo.location} />
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl border border-green-100 dark:border-green-900/30 bg-green-50/50 dark:bg-green-900/10">
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">Open to Opportunities</p>
              <p className="text-xs text-gray-400">Internships, projects & collaborations 🌸</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card hover={false} className="bg-gradient-to-br from-white to-pink-50/40 dark:from-[#2D1520] dark:to-rose-900/10">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={18} className="text-rose-400" />
            <h4 className="font-bold text-gray-900 dark:text-white">Send a Message</h4>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Your Name
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required
                className={inputClass} placeholder="Nancy Rana" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Your Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required
                className={inputClass} placeholder="hello@example.com" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Your Message
              </label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                className={`${inputClass} resize-none`} placeholder="Tell me about your project or just say hi! 🌸" />
            </div>

            {status.message && (
              <div className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                status.type === 'success'
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-100'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-100'
              }`}>
                {status.type === 'success'
                  ? <CheckCircle size={18} className="shrink-0 mt-0.5" />
                  : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                <p>{status.message}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 shadow-lg shadow-rose-200 hover:shadow-xl hover:shadow-rose-300"
              style={{ background: 'linear-gradient(135deg, #f43f5e, #ec4899)' }}
            >
              {isSubmitting ? (
                <><span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" /> Sending...</>
              ) : (
                <><Send size={16} /> Send Message ✨</>
              )}
            </button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;