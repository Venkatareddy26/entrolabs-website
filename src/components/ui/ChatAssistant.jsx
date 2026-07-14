import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";

const quickPrompts = ["Explore services", "Start a project", "Contact details"];

function getReply(question) {
  const query = question.toLowerCase();
  if (/(service|solution|governance|ticket|pos|qa|iot)/.test(query)) {
    return "We design e-Governance, e-Ticketing, POS, QA automation, SIS and IoT platforms, as well as enterprise application services.";
  }
  if (/(mobile|web|api|cloud|technology|stack)/.test(query)) {
    return "Our teams build mobile apps, web platforms and secure API integrations using a modern enterprise stack across cloud and DevOps.";
  }
  if (/(project|quote|price|cost|budget|start)/.test(query)) {
    return "Tell our team about your requirement through the contact page or at support@entrolabs.com. We will help you define the scope and delivery approach.";
  }
  if (/(contact|phone|email|call|address)/.test(query)) {
    return "You can reach EntroLabs at support@entrolabs.com or +91-4042016637. Our team is based in Madhapur, Hyderabad.";
  }
  if (/(career|job|join|hiring)/.test(query)) {
    return "Visit the Careers page to explore current roles across engineering, QA, DevOps and design.";
  }
  return "I can help with EntroLabs services, technology, careers, project enquiries or contact details. What would you like to know?";
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! I’m the EntroLabs Assistant. How can I help you today?" },
  ]);

  const sendMessage = (value) => {
    const text = value.trim();
    if (!text) return;
    setMessages((current) => [...current, { role: "user", text }, { role: "assistant", text: getReply(text) }]);
    setInput("");
  };

  return (
    <aside className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7" aria-label="EntroLabs Assistant">
      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 330, damping: 28 }}
            className="absolute bottom-16 right-0 w-[min(23rem,calc(100vw-2.5rem))] overflow-hidden rounded-[26px] border border-slate-200/70 bg-white shadow-2xl shadow-slate-950/20 dark:border-white/10 dark:bg-slate-950"
            role="dialog"
            aria-label="EntroLabs Assistant conversation"
          >
            <header className="flex items-center justify-between gap-4 bg-gradient-to-br from-secondary-deep via-secondary to-primary p-4 text-white">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">EntroLabs Assistant</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-primary-soft" />Here to help</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-xl p-2 transition hover:bg-white/15" aria-label="Close assistant">
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="max-h-72 min-h-56 space-y-3 overflow-y-auto bg-slate-50/80 p-4 dark:bg-slate-900/45" aria-live="polite">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${message.role === "user" ? "ml-auto rounded-br-md bg-primary text-white" : "rounded-bl-md border border-slate-200/70 bg-white text-slate-600 dark:border-white/5 dark:bg-slate-900 dark:text-slate-300"}`}>
                  {message.text}
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickPrompts.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => sendMessage(prompt)} className="rounded-full border border-secondary/25 bg-white px-3 py-1.5 text-[11px] font-semibold text-secondary-deep transition hover:border-primary hover:text-primary dark:bg-slate-900">
                      {prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="flex gap-2 border-t border-slate-200/70 bg-white p-3 dark:border-white/5 dark:bg-slate-950">
              <label className="sr-only" htmlFor="assistant-question">Ask EntroLabs Assistant</label>
              <input id="assistant-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question..." className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none transition placeholder:text-slate-400 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/15 dark:border-white/10 dark:bg-white/5 dark:focus:bg-white/10" />
              <button type="submit" className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark" aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button type="button" onClick={() => setOpen((value) => !value)} whileTap={{ scale: 0.94 }} className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-xl shadow-secondary/25 ring-4 ring-white/80 transition hover:-translate-y-1 dark:ring-brand-dark" aria-label={open ? "Close EntroLabs Assistant" : "Open EntroLabs Assistant"} aria-expanded={open}>
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-primary-soft" />
      </motion.button>
    </aside>
  );
}
