import Badge from "../components/ui/Badge";

export default function Privacy() {
  return (
    <div className="bg-white dark:bg-brand-dark min-h-screen text-slate-800 dark:text-slate-200">

      {/* Page Hero */}
      <section className="relative py-20 px-6 md:px-12 bg-slate-50 dark:bg-slate-950 overflow-hidden border-b border-slate-200/50 dark:border-white/5">
        <div className="max-w-7xl mx-auto space-y-4 text-left relative z-10">
          <Badge variant="muted">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl leading-relaxed">
            Last updated: July 2026
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <article className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We collect information you provide directly, such as your name, email address, phone number, and project details when you submit a contact form or apply for a position. We also collect usage data including browser type, pages visited, and interaction patterns through standard analytics tools.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Your information is used to respond to inquiries, process applications, improve our services, and communicate relevant updates. We do not sell or rent your personal data to third parties.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">3. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We implement industry-standard security measures including encryption, access controls, and secure data storage to protect your personal information against unauthorized access, alteration, or disclosure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">4. Cookies & Tracking</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can configure your browser to refuse cookies, though some features may not function optimally.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">5. Third-Party Services</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We may use third-party analytics (e.g., Google Analytics) and communication tools. These services have their own privacy policies, and we encourage you to review them.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">6. Your Rights</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at support@entrolabs.com. We will respond within 30 days.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">7. Contact</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              For privacy-related inquiries, email us at <a href="mailto:support@entrolabs.com" className="text-primary dark:text-primary-soft font-semibold hover:underline">support@entrolabs.com</a> or write to our registered office at Kakatiya Hills, Madhapur, Hyderabad, Telangana 500081.
            </p>
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-950/30 text-center">
            <p className="text-xs text-slate-400 dark:text-slate-600">
              © 2016 – 2026 EntroLabs IT Solutions Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
