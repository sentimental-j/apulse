// File: components/MockupEngine/Chat.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hey there! 👋 Ready to build something amazing?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Nice! Our AI will generate a stunning mockup based on that. 🚀",
        },
      ]);
    }, 800);
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-20 border border-white/10 rounded-xl bg-white/5 overflow-hidden">
      <div className="p-4 max-h-[400px] overflow-y-auto space-y-4 text-sm">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`px-4 py-2 rounded-lg max-w-[80%] ${
              msg.role === "user"
                ? "bg-purple-600 text-white ml-auto"
                : "bg-white/10 text-white"
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex border-t border-white/10 bg-black">
        <input
          type="text"
          className="flex-1 bg-transparent text-white px-4 py-3 outline-none"
          placeholder="Describe your business or idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-6 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition"
        >
          Send
        </button>
      </div>
    </section>
  );
}
