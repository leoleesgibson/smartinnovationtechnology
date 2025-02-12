import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane, faTimes, faRobot } from '@fortawesome/free-solid-svg-icons';
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import the Gemini API

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can ihelp u",
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
      setIsTyping(true);

      try {
        const aiResponseText = await getGeminiResponse(newMessage);
        const aiResponse = {
          text: aiResponseText,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      } catch (error) {
        console.error("Gemini API Error:", error);
        const errorResponse = {
          text: "Sorry, I encountered an error while processing your request.",
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prevMessages => [...prevMessages, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  const getGeminiResponse = async (message) => {
    const apiKey = "AIzaSyDX3FZPb-ZaiO-VvUIP1CqwQ9vRfZUm0tk"; // Accessing environment variable
    if (!apiKey) {
      throw new Error("Gemini API key not found.  Please set the NEXT_PUBLIC_GEMINI_API_KEY environment variable.");
    }


    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
          model: "gemini-2.0-flash",
          systemInstruction: "You are an AI assistant named John, representing S.I Technologies, a leader in smart home automation, IT infrastructure, and advanced security solutions.\n\nUser Identification Requirement:\nBefore assisting a user, always ask for their name. If the user does not provide a name, politely inform them that you can only assist once they share their name. Do not proceed with answering any questions until the user provides their name.\n\nScope Restriction:\nOnly respond to questions related to S.I Technologies and its services. If a user asks about topics outside of the company's expertise, politely inform them that you can only discuss:\n\nSmart Home Automation: Intelligent Lighting Control, Climate Automation, Security Integration, and Entertainment Systems.\nIT Infrastructure: Network Architecture, Cloud Solutions, Cybersecurity, and Data Management.\nAdvanced Security: HD Surveillance, Fire Detection, Access Management, and Perimeter Security.\nIf a question falls outside this scope, inform the user that your expertise is limited to S.I Technologies's offerings and politely redirect them to relevant topics.\n\nResponse Format:\nKeep responses concise and to the point.\nAlways mention the user’s name when responding.\nMaintain a professional yet friendly tone to ensure clarity and confidence in S.I Technologies's solutions.\nExample Interaction:\nUser: \"Can you tell me about your security systems?\"\nJohn: \"Sure, [User's Name]! S.I Technologies offers advanced security solutions, including HD surveillance, fire detection, access management, and perimeter security. Let me know which specific feature interests you!",
        });

        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "hello" }],
            },
            {
              role: "model",
              parts: [{ text: "Hello there! Before I can assist you, could you please provide your name? I only assist users who provide their names." }],
            },
          ],
        });

        const result = await chat.sendMessage(message);
        const responseText = result.response.text();

        return responseText;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button
          onClick={toggleChat}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <FontAwesomeIcon icon={faComment} className="text-2xl" />
        </button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-b from-gray-900 to-blue-900 rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] flex flex-col overflow-hidden border border-white/10"
            >
              {/* Chat Header */}
              <div className="p-4 bg-white/5 backdrop-blur-sm flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <FontAwesomeIcon icon={faRobot} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-white font-semibold">SI Technologies AI</h2>
                    <p className="text-blue-400 text-sm">Always here to help</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleChat}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </motion.button>
              </div>

              {/* Chat Messages */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent"
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-white/10 text-white backdrop-blur-sm'
                      }`}
                    >
                      <p className="break-words">{msg.text}</p>
                      <p className="text-xs mt-1 opacity-70">{msg.timestamp}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 text-blue-400"
                  >
                    <span className="animate-bounce delay-0">●</span>
                    <span className="animate-bounce delay-100">●</span>
                    <span className="animate-bounce delay-200">●</span>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-4 py-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatIcon;