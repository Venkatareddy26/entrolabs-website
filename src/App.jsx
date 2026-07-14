import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageWrapper from "./components/layout/PageWrapper";
import BackToTop from "./components/ui/BackToTop";
import Chatbot from "./components/ui/Chatbot";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-brand-dark text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/technologies" element={<PageWrapper><Technologies /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <BackToTop />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
