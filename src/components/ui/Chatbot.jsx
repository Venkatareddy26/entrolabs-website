import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import Button from "./Button";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to EntroLabs. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "What services do you offer?",
    "Where is your office located?",
    "How can I contact sales?",
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      text: text,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      let replyText = "Thank you for reaching out! A representative will get back to you shortly. For immediate support, please write to support@entrolabs.com.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("service") || lowerText.includes("offer") || lowerText.includes("what do you do")) {
        replyText = "We offer Enterprise Application Services, Software Product Engineering, Mobility Solutions, Business Process Services, and Industry Platform Solutions.";
      } else if (lowerText.includes("office") || lowerText.includes("location") || lowerText.includes("where")) {
        replyText = "Our HQ office is at: First Floor, Plot No:479, Road No:10, Kakatiya Hills, Madhapur, Hyderabad, Telangana 500081.";
      } else if (lowerText.includes("contact") || lowerText.includes("sales") || lowerText.includes("phone") || lowerText.includes("email")) {
        replyText = "You can contact us via email at support@entrolabs.com or phone at +91-4042016637. You can also fill out the form on our Contact page!";
      }

      const botMsg = {
        id: Date.now() + 1,
        text: replyText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="w-[320px] md:w-[360px] h-[450px] md:h-[500px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-white/5 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-xl mb-4"
          >
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-primary to-primary-soft text-white px-5 py-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-4.5 w-4.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold leading-none">EntroBot</div>
                  <span className="text-[10px] text-green-200 font-semibold flex items-center gap-1 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse" /> Online Assistance
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Chatbot Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 no-scrollbar bg-slate-50/50 dark:bg-slate-950/20 text-left">
              {messages.map((msg) => {
                const isBot = msg.sender === "bot";
                return (
                  <div key={msg.id} className={`flex ${isBot ? "justify-start" : "justify-end"} gap-2`}>
                    {isBot && (
                      <div className="h-7 w-7 rounded-full bg-primary/15 dark:bg-primary-soft/10 text-primary dark:text-primary-soft flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}
                    <div className="max-w-[75%] space-y-1">
                      <div className={`p-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                        isBot
                          ? "bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-white/5 text-slate-800 dark:text-slate-200 rounded-tl-sm"
                          : "bg-primary text-white rounded-tr-sm"
                      }`}>
                        {msg.text}
                      </div>
                      <div className={`text-[9px] text-slate-400 dark:text-slate-600 ${!isBot ? "text-right" : ""}`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggetions */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/40 text-left space-y-1.5">
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest block mb-1">Quick Actions</span>
                <div className="flex flex-col gap-1.5">
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => handleSend(prompt)}
                      className="text-left text-xs bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 border border-slate-200/60 dark:border-white/5 px-3 py-1.5 rounded-xl text-slate-700 dark:text-slate-300 transition-colors duration-200 cursor-pointer font-medium"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chatbot Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 border-t border-slate-200/50 dark:border-white/5 flex gap-2 bg-white dark:bg-slate-900"
            >
              <input
                type="text"
                placeholder="Ask EntroBot a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-white/5 rounded-xl text-xs md:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="h-10 w-10 rounded-xl bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Bubble Toggle Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark border border-white/10 transition-colors cursor-pointer"
        aria-label="Open chat assistance"
      >
        {isOpen ? <X className="h-5.5 w-5.5" /> : <MessageSquare className="h-5.5 w-5.5" />}
      </motion.button>
    </div>
  );
}
