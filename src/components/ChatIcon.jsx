import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const ChatIcon = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newMsg = {
        text: newMessage,
        sender: 'user', // or 'ai'
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');

      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        const aiResponse = {
          text: `Thanks for your message! We'll get back to you shortly. (Simulated response)`,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  // Scroll to bottom of chat on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Prevent scrolling when the chat modal is open
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset'; // Clean up on unmount
    };
  }, [isChatOpen]);

  return (
    <>
      {/* Chat Icon */}
      <div
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg cursor-pointer z-50"
        onClick={toggleChat}
        aria-label="Open Chat"
        title="Chat with our AI assistant"
      >
        <FontAwesomeIcon icon={faComment} size="2x" />
      </div>

      {/* Chat Modal (Conditionally Rendered) */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 h-3/4 flex flex-col">
            <div className="bg-blue-700 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Chat with Smart Innovative Technologies AI
              </h2>
              <button
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={toggleChat}
                aria-label="Close Chat"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </div>

            {/* Chat Content Area */}
            <div className="p-4 flex-grow overflow-y-auto" ref={chatContainerRef}>
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block rounded-lg p-2 ${msg.sender === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}
                  >
                    {msg.text}
                    <div className="text-xs text-gray-500 mt-1">{msg.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input Area */}
            <div className="p-4 border-t border-gray-200 flex items-center">
              <input
                type="text"
                className="w-full border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
                value={newMessage}
                onChange={handleInputChange}
                onKeyPress={(e) => { if (e.key === 'Enter') { handleSendMessage(); } }}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-2"
                onClick={handleSendMessage}
                aria-label="Send Message"
              >
                <FontAwesomeIcon icon={faPaperPlane} size="lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatIcon;