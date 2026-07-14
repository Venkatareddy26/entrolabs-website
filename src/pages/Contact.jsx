import { useState } from "react";
import RevealOnScroll from "../components/animations/RevealOnScroll";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { CONTACT_INFO, SOCIAL_LINKS } from "../data/siteData";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const getSocialIcon = (label) => {
    switch (label.toLowerCase()) {
      case "facebook":
        return (
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
          </svg>
        );
      case "instagram":
        return (
          <svg className="h-5 w-5 stroke-current fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case "youtube":
        return (
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.163c-.272-.98-1.09-1.755-2.083-2.023-1.837-.491-9.2-.491-9.2-.491s-7.363 0-9.2.491c-.993.268-1.81.1-2.083 2.023C.5 7.973.5 12 .5 12s0 4.027.515 5.837c.272.98 1.09 1.755 2.083 2.023 1.837.491 9.2.491 9.2.491s7.363 0 9.2-.491c.993-.268 1.81-1.043 2.083-2.023.515-1.81.515-5.837.515-5.837s0-4.027-.515-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const inputClass = "w-full px-5 py-3.5 rounded-2xl text-sm bg-white/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-white/5 backdrop-blur-md text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/30 dark:focus:ring-primary-soft/20 focus:border-primary/30 dark:focus:border-primary-soft/10 transition-all duration-300";

  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">

      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,159,211,0.04),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="secondary">Get in Touch</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Contact Us
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Schedule an appointment, submit a project brief, or simply drop us a note. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Grid: Form + Info */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="rounded-[32px] border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/50 backdrop-blur-md p-8 md:p-12 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send Us a Message</h2>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-green-50 dark:bg-green-950/20 border border-green-200/50 dark:border-green-900/30 text-center space-y-3">
                    <div className="text-4xl">✅</div>
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-400">Message Sent!</h3>
                    <p className="text-sm text-green-600 dark:text-green-500">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="text" name="name" placeholder="Full Name *" required value={formState.name} onChange={handleChange} className={inputClass} />
                      <input type="email" name="email" placeholder="Email Address *" required value={formState.email} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <input type="tel" name="phone" placeholder="Phone Number" value={formState.phone} onChange={handleChange} className={inputClass} />
                      <input type="text" name="subject" placeholder="Subject *" required value={formState.subject} onChange={handleChange} className={inputClass} />
                    </div>
                    <textarea name="message" placeholder="Tell us about your project requirements..." rows={5} required value={formState.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                    <Button type="submit" variant="primary" size="lg" icon={<Send className="h-4.5 w-4.5" />}>
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <RevealOnScroll direction="up" delay={0.15}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                We'd love to<br />hear from <span className="text-primary dark:text-primary-soft">you.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-4">
                Join our smart missions by reaching out. We can arrange a phone or video call to connect and discuss your requirements.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-semibold text-slate-800 dark:text-white hover:text-primary dark:hover:text-primary-soft transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">Phone</div>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-semibold text-slate-800 dark:text-white hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-primary-soft/10 flex items-center justify-center text-primary-soft flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-1">Office</div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Social Links */}
            <RevealOnScroll direction="up" delay={0.25}>
              <div className="pt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-600 mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {SOCIAL_LINKS.map(link => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                      className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-soft hover:border-primary/20 transition-all duration-300">
                      {getSocialIcon(link.label)}
                    </a>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
