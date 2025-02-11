import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane, faTimes, faRobot, faUser } from '@fortawesome/free-solid-svg-icons';

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMsg = {
        text: newMessage,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages(prev => [...prev, userMsg]);
      setNewMessage('');

      // Simulated AI response
      setTimeout(() => {
        const aiResponse = {
          text: `Thank you for your message! Our team will respond shortly. (Simulated AI Response)`,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 800);
    }
  };

  const handleInputChange = (e) => setNewMessage(e.target.value);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && setIsChatOpen(false);
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isChatOpen ? 'hidden' : 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isChatOpen]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Open chat"
      >
        <FontAwesomeIcon 
          icon={faComment} 
          className="text-white text-2xl transform group-hover:scale-110 transition-transform" 
        />
        <div className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2 py-1 animate-pulse">
          Live
        </div>
      </button>

      {/* Chat Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex items-end md:items-center justify-end md:justify-center p-4">
          <div className="bg-white w-full max-w-2xl h-[85vh] md:h-[70vh] rounded-2xl shadow-xl flex flex-col transform transition-all duration-300">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
                <h2 className="text-white text-lg font-semibold">Smart Innovative AI</h2>
              </div>
              <button
                onClick={toggleChat}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
            >
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white ml-12' 
                      : 'bg-white shadow-md mr-12'
                  }`}>
                    <div className="flex items-center space-x-2 mb-2">
                      <FontAwesomeIcon 
                        icon={msg.sender === 'user' ? faUser : faRobot} 
                        className={`text-sm ${
                          msg.sender === 'user' ? 'text-blue-200' : 'text-purple-600'
                        }`}
                      />
                      <span className="text-xs font-medium">
                        {msg.sender === 'user' ? 'You' : 'AI Assistant'}
                      </span>
                    </div>
                    <p className="text-sm">{msg.text}</p>
                    <div className={`text-xs mt-2 ${
                      msg.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                    }`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={newMessage}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl transition-all duration-200 flex items-center justify-center"
                  aria-label="Send message"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Smart Innovative Technologies
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;