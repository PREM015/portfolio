'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: 'Hi! How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! I'll get back to you soon.", sender: 'bot' },
      ]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-600 z-50"
        aria-label="Open chat"
      >
        💬
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 w-96 h-[500px] bg-white/10 backdrop-blur-md rounded-lg shadow-2xl z-50 flex flex-col"
          >
            <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-bold text-white">Live Chat</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Close chat"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 p-2 bg-white/10 rounded-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="Send message"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}