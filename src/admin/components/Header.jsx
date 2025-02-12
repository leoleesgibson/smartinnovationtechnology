import React, { useState } from 'react';
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <FaBars className="w-6 h-6" />
            </button>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Smart Home
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-3">
              <button
                type="button"
                className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <FaBell className="w-6 h-6" />
              </button>
              <div className="relative ml-3">
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <FaUserCircle className="w-8 h-8 text-gray-400" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                    <div className="py-2 px-4 text-sm text-gray-900 dark:text-white">
                      <div>John Doe</div>
                      <div className="font-medium truncate">john@example.com</div>
                    </div>
                    <ul className="py-1">
                      <li>
                        <a
                          href="#profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#signout"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;