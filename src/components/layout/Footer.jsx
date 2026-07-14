import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER, CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from "../../data/siteData";
import Button from "../ui/Button";
import logoBlack from "../../assets/logo-black.png";

export default function Footer() {
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


  return (
    <footer className="bg-white dark:bg-white text-slate-800 border-t border-slate-200 dark:border-slate-200 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative backdrop mesh elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-200 dark:border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img src={logoBlack} alt="EntroLabs" className="h-12 w-auto" />
            </Link>
            <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed max-w-sm">
              {FOOTER.tagline}
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-100 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-slate-200 dark:border-slate-200 text-slate-600 dark:text-slate-600"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.label)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-800 uppercase">
              Company
            </h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => {
                if (link.isCTA) return null;
                return (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Technologies dropdown links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-800 uppercase">
              Tech Verticals
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  to="/technologies#mobile"
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies#web"
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  Web Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/technologies#api"
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  API Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-sm font-semibold tracking-wider text-slate-800 dark:text-slate-800 uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">
                  {CONTACT_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-500 dark:text-slate-500 hover:text-primary text-sm transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 dark:text-slate-400 text-xs">
          <p className="text-center md:text-left leading-relaxed">
            {FOOTER.copyright}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
